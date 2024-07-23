import { promises as fs } from 'node:fs'
import process from 'node:process'
import getTheme from './theme'

fs.writeFile(
  './themes/e-ink.json',
  `${JSON.stringify(getTheme(), null, 2)}\n`,
).catch(() => process.exit(1))

fs.writeFile(
  './themes/e-ink-color.json',
  `${JSON.stringify(getTheme(true), null, 2)}\n`,
).catch(() => process.exit(1))
