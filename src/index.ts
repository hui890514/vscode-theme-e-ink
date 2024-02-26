import { promises as fs } from 'node:fs'
import process from 'node:process'
import getTheme from './theme'

fs.writeFile(
  './themes/e-ink.json',
  `${JSON.stringify(getTheme())}\n`
).catch(() => process.exit(1))
