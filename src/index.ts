import { promises as fs } from 'node:fs'
import process from 'node:process'
import { getThemeColors } from './theme'
import { getSemanticTokenColors, getTokenColors } from './token'

export type Index = 0 | 1 | 2
function getTheme(index: Index) {
  return {
    name: ['E-Ink', 'E-Ink Color Light', 'E-Ink Color Dark'][index],
    base: ['hc-light', 'hc-light', 'hc-black'][index],
    $schema: 'vscode://schemas/color-theme',
    colors: getThemeColors(index),
    tokenColors: getTokenColors(index),
    ...getSemanticTokenColors(index),
  }
}

fs.writeFile(
  './themes/e-ink.json',
  `${JSON.stringify(getTheme(0), null, 2)}\n`,
).catch(() => process.exit(1))

fs.writeFile(
  './themes/e-ink-color-light.json',
  `${JSON.stringify(getTheme(1), null, 2)}\n`,
).catch(() => process.exit(1))

fs.writeFile(
  './themes/e-ink-color-dark.json',
  `${JSON.stringify(getTheme(2), null, 2)}\n`,
).catch(() => process.exit(1))
