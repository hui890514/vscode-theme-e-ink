import { promises as fs } from 'node:fs'
import process from 'node:process'
import { getThemeColors } from './theme'
import { getSemanticTokenColors, getTokenColors } from './token'

function getTheme(isColor = false) {
  return {
    name: isColor ? 'E-Ink Color' : 'E-Ink',
    base: 'hc-light',
    $schema: 'vscode://schemas/color-theme',
    colors: getThemeColors(isColor),
    tokenColors: getTokenColors(isColor),
    ...getSemanticTokenColors(isColor),
  }
}

fs.writeFile(
  './themes/e-ink.json',
  `${JSON.stringify(getTheme(), null, 2)}\n`,
).catch(() => process.exit(1))

fs.writeFile(
  './themes/e-ink-color.json',
  `${JSON.stringify(getTheme(true), null, 2)}\n`,
).catch(() => process.exit(1))
