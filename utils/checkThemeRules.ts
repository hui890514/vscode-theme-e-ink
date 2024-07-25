import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import axios from 'axios'
import jsdom from 'jsdom'

// eslint-disable-next-line node/prefer-global/process
const path = resolve(process.cwd(), './src/theme.ts')

interface LocalRules {
  [index: string]: string
}
function getLocalRules() {
  const str = readFileSync(path, 'utf8')
  const reg = / {4}'(.*)':(.*),/g
  const localRules: LocalRules = {}
  let match
  while (true) {
    match = reg.exec(str)
    if (!match)
      break
    localRules[match[1]] = match[2].trim()
  }
  return localRules
}

interface Rules {
  [index: string]: string[]
}
async function getRules() {
  const str = (await axios.get('https://code.visualstudio.com/api/references/theme-color')).data
  const html = new jsdom.JSDOM(str)
  const div = html.window.document.querySelector('#main-content')
  const mainDiv = div.children[0].children[0].children[2]
  const children = mainDiv.children
  const rules: Rules = {}
  let currentRule = ''
  for (const child of children) {
    if (child.tagName === 'H2') {
      rules[currentRule = child.textContent] = []
    }
    else if (child.tagName === 'UL') {
      for (const li of child.children) {
        const code = li.querySelector('code')?.textContent
        code && rules[currentRule].push(code)
      }
    }
  }
  return rules
}

function diff(localRules: LocalRules, rules: Rules) {
  let str = `import { theme } from './color'

export function getThemeColors(isColor = false) {
  const h = (colors: readonly [string, string]) => isColor ? colors[1] : colors[0]

  return {
    // https://code.visualstudio.com/api/references/theme-color
    `
  for (const key of Object.keys(rules)) {
    if (rules[key].length === 0) {
      continue
    }
    else {
      let s = `
      // ${key}
      `
      for (const rule of rules[key]) {
        s += localRules[rule]
          ? `'${rule}': ${localRules[rule]},
          `
          : `// '${rule}': h(theme.background),
          `
      }
      str += s
    }
  }
  str += `
  }
}
  `
  writeFileSync(path, str)
}

diff(getLocalRules(), await getRules())
