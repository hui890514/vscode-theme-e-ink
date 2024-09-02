enum color {
  black = '#000000',
  white = '#FFFFFF',
  lightGray = '#DDDDDD',
  darkGray = '#B4B4B3',
  red = '#b5200d',
  yellow = '#cca300',
  transparent = '#F8F8F200',
}

enum lightColor {
  black = '#000000',
  white = '#FFFFFF',
  red = '#b5200d',
  blue = '#3F51B5',
  purple = '#AF00DB',
  orange = '#FF9800',
  lightGreen = '#2AA198',
  green = '#1CB01C',
  brown = '#795548',
  lightBrown = '#DAB0A1',
  yellow = '#CCA300',
  transparent = '#F8F8F200',
}

enum darkColor {
  black = '#141523',
  white = '#F8F8F2',
  purple = '#BD93F9',
  pink = '#FF79C6',
  red = '#FF5555',
  transparentRed = '#ff555550',
  yellow = '#EAC394',
  blue = '#8BE9FD',
  darkBlue = '#6272A4',
  transparentDarkBlue = '#6272A499',
  transparentDarkBlue2 = '#6272A4CC',
  orange = '#FF9800',
  green = '#20E3B2',
  lightGreen = '#2AA198',
  transparentLightGreen = '#2AA19850',
  gray = '#44475A',
  transparentGray = '#44475Ad0',
  transparent = '#F8F8F200',
}

export const theme = <const>{
  background: [color.white, lightColor.white, darkColor.black],
  background2: [color.lightGray, lightColor.lightBrown, darkColor.gray],
  hightlightBackground: [color.lightGray, lightColor.lightBrown, darkColor.gray],
  selectionBackground: [color.lightGray, lightColor.lightBrown, darkColor.gray],
  dropBackground: [color.lightGray, lightColor.lightBrown, darkColor.gray],
  diffInsertedTransparentBackground: [color.transparent, lightColor.transparent, darkColor.transparentLightGreen],
  diffRemovedTransparentBackground: [color.transparent, lightColor.transparent, darkColor.transparentRed],
  diffInsertedTransparentBackground2: [color.lightGray, lightColor.green, darkColor.transparentGray],
  diffRemovedTransparentBackground2: [color.lightGray, lightColor.red, darkColor.transparentGray],
  listSelectionBackground: [color.white, lightColor.white, darkColor.gray],
  inactiveBackground: [color.lightGray, lightColor.lightBrown, darkColor.transparentDarkBlue],
  activeBackground: [color.darkGray, lightColor.brown, darkColor.darkBlue],
  hoverBackground: [color.darkGray, lightColor.brown, darkColor.transparentDarkBlue2],
  hoverBackground2: [color.lightGray, lightColor.lightBrown, darkColor.gray],

  foreground: [color.black, lightColor.brown, darkColor.white],
  lineNumberForeground: [color.black, lightColor.brown, darkColor.darkBlue],
  lineNumberActiveForeground: [color.darkGray, lightColor.purple, darkColor.purple],
  cursorForeground: [color.black, lightColor.brown, darkColor.purple],
  selectionForeground: [color.black, lightColor.brown, darkColor.transparent],
  linkForeground: [color.darkGray, lightColor.blue, darkColor.purple],
  placeholderForeground: [color.darkGray, lightColor.brown, darkColor.white],
  whiteSpaceForeground: [color.white, lightColor.brown, darkColor.white],
  disabledForeground: [color.lightGray, lightColor.lightBrown, darkColor.darkBlue],

  border: [color.black, lightColor.brown, darkColor.darkBlue],
  dropBorder: [color.black, lightColor.purple, darkColor.purple],
  diffInsertedBorder: [color.black, lightColor.green, darkColor.transparentLightGreen],
  diffRemovedborder: [color.black, lightColor.red, darkColor.transparentRed],
  selectionBorder: [color.black, lightColor.brown, darkColor.purple],
  focusBorder: [color.black, lightColor.brown, darkColor.purple],

  shadow: [color.white, lightColor.white, darkColor.black],
  outline: [color.black, lightColor.brown, darkColor.purple],
  separator: [color.black, lightColor.brown, darkColor.white],
  stroke: [color.black, lightColor.brown, darkColor.darkBlue],
  highlight: [color.lightGray, lightColor.lightBrown, darkColor.white],
  highlight2: [color.darkGray, lightColor.brown, darkColor.white],
  error: [color.red, lightColor.red, darkColor.red],
  warning: [color.yellow, lightColor.yellow, darkColor.yellow],

  bracket: [color.black, lightColor.blue, darkColor.pink],
  bracket2: [color.black, lightColor.purple, darkColor.orange],
  bracket3: [color.black, lightColor.orange, darkColor.blue],
  bracket4: [color.black, lightColor.green, darkColor.green],
  bracket5: [color.black, lightColor.yellow, darkColor.white],
  bracket6: [color.black, lightColor.brown, darkColor.yellow],
  unexpectedBracket: [color.black, lightColor.black, darkColor.red],
}

export const tokenColor = <const>{
  default: [color.black, lightColor.brown, darkColor.white],
  variable: [color.black, lightColor.brown, darkColor.white],
  meta: [color.black, lightColor.brown, darkColor.white],
  entity: [`${color.black} bold`, `${lightColor.purple}`, `${darkColor.blue}`],
  keyword: [`${color.black} italic`, `${lightColor.blue}`, `${darkColor.pink}`],
  support: [`${color.black} italic`, `${lightColor.blue}`, `${darkColor.pink}`],
  storage: [`${color.black} italic`, `${lightColor.blue}`, `${darkColor.pink}`],
  constantLanguage: [`${color.darkGray} italic bold`, `${lightColor.green}`, `${darkColor.yellow}`],
  constant: [`${color.darkGray} bold`, `${lightColor.green}`, `${darkColor.yellow}`],
  string: [`${color.darkGray} bold`, `${lightColor.green}`, `${darkColor.yellow}`],
  comment: [color.lightGray, lightColor.lightGreen, darkColor.lightGreen],
  invalid: [color.lightGray, lightColor.red, darkColor.red],
}

export const semanticTokenColor = <const>{
  namespace: [color.black, lightColor.brown, darkColor.white],
  function: [`${color.black} bold`, lightColor.purple, darkColor.blue],
  property: [color.black, lightColor.brown, darkColor.white],
  interface: [`${color.black} bold`, lightColor.orange, darkColor.green],
  type: [`${color.black} bold`, lightColor.orange, darkColor.green],
  typeParameter: [color.black, lightColor.brown, darkColor.green],
  class: [color.black, lightColor.brown, darkColor.white],
  enum: [color.black, lightColor.brown, darkColor.white],
}

export const otherTokenColor = <const>{
  htmlTag: [`${color.black} bold`, `${lightColor.purple}`, `${darkColor.pink}`],
}

export function formatColor(a: string) {
  const b = a.split(' ')
  return {
    foreground: b.shift(),
    fontStyle: b.join(' ') || '',
  }
}
