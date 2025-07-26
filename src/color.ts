enum color {
  black = '#000000',
  white = '#FFFFFF',
  lightGray = '#DDDDDD',
  darkGray = '#B4B4B3',
  red = '#B5200D',
  yellow = '#CCA300',
  transparent = '#F8F8F200',
}

enum lightColor {
  black = '#000000',
  white = '#FFFFFF',
  red = '#FF5555',
  blue = '#3F51B5',
  pink = '#FF79C6',
  purple = '#AF00DB',
  orange = '#FF9800',
  lightGreen = '#2AA198',
  green = '#1CB01C',
  brown = '#795548',
  lightBrown = '#DAB0A1',
  yellow = '#CCA300',
  transparent = '#F8F8F200',
  transparentGreen = '#1CB01C50',
  transparentRed = '#FF555550',
  gray = '#44475A',
}

enum darkColor {
  black = '#141523',
  white = '#F8F8F2',
  purple = '#BD93F9',
  pink = '#FF79C6',
  red = '#FF5555',
  transparentRed = '#FF555550',
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
  diffInsertedTransparentBackground: [color.transparent, lightColor.transparentGreen, darkColor.transparentLightGreen],
  diffRemovedTransparentBackground: [color.transparent, lightColor.transparentRed, darkColor.transparentRed],
  diffInsertedTransparentBackground2: [color.lightGray, lightColor.transparentGreen, darkColor.transparentGray],
  diffRemovedTransparentBackground2: [color.lightGray, lightColor.transparentRed, darkColor.transparentGray],
  listSelectionBackground: [color.white, lightColor.lightBrown, darkColor.gray],
  inactiveBackground: [color.lightGray, lightColor.lightBrown, darkColor.transparentDarkBlue],
  activeBackground: [color.darkGray, lightColor.brown, darkColor.darkBlue],
  hoverBackground: [color.darkGray, lightColor.brown, darkColor.transparentDarkBlue2],
  hoverBackground2: [color.lightGray, lightColor.lightBrown, darkColor.gray],
  transparentBackground: [color.transparent, lightColor.transparent, darkColor.transparent],

  foreground: [color.black, lightColor.brown, darkColor.white],
  lineNumberForeground: [color.black, lightColor.brown, darkColor.darkBlue],
  lineNumberActiveForeground: [color.darkGray, lightColor.pink, darkColor.purple],
  cursorForeground: [color.black, lightColor.brown, darkColor.purple],
  selectionForeground: [color.black, lightColor.transparent, darkColor.transparent],
  linkForeground: [color.darkGray, lightColor.blue, darkColor.purple],
  placeholderForeground: [color.darkGray, lightColor.brown, darkColor.white],
  whiteSpaceForeground: [color.white, lightColor.brown, darkColor.white],
  disabledForeground: [color.lightGray, lightColor.lightBrown, darkColor.darkBlue],

  border: [color.black, lightColor.brown, darkColor.darkBlue],
  dropBorder: [color.black, lightColor.pink, darkColor.purple],
  diffInsertedBorder: [color.black, lightColor.transparentGreen, darkColor.transparentLightGreen],
  diffRemovedborder: [color.black, lightColor.transparentRed, darkColor.transparentRed],
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
  bracket2: [color.black, lightColor.gray, darkColor.orange],
  bracket3: [color.black, lightColor.pink, darkColor.blue],
  bracket4: [color.black, lightColor.yellow, darkColor.green],
  bracket5: [color.black, lightColor.brown, darkColor.white],
  bracket6: [color.black, lightColor.green, darkColor.yellow],
  unexpectedBracket: [color.black, lightColor.red, darkColor.red],
}

export const tokenColor = <const>{
  default: [color.black, lightColor.brown, darkColor.white],
  variable: [color.black, lightColor.brown, darkColor.white],
  meta: [color.black, lightColor.brown, darkColor.white],
  entity: [`${color.black} bold`, lightColor.pink, darkColor.blue],
  keyword: [`${color.black} italic`, lightColor.blue, darkColor.pink],
  support: [`${color.black} italic`, lightColor.blue, darkColor.pink],
  storage: [`${color.black} italic`, lightColor.blue, darkColor.pink],
  constantLanguage: [`${color.darkGray} italic bold`, lightColor.green, darkColor.yellow],
  constant: [`${color.darkGray} bold`, lightColor.green, darkColor.yellow],
  string: [`${color.darkGray} bold`, lightColor.green, darkColor.yellow],
  comment: [color.lightGray, lightColor.lightGreen, darkColor.lightGreen],
  invalid: [color.lightGray, lightColor.red, darkColor.red],
}

export const semanticTokenColor = <const>{
  namespace: [color.black, lightColor.brown, darkColor.white],
  function: [`${color.black} bold`, lightColor.pink, darkColor.blue],
  property: [color.black, lightColor.gray, darkColor.orange],
  interface: [`${color.black} bold`, lightColor.yellow, darkColor.green],
  type: [`${color.black} bold`, lightColor.yellow, darkColor.green],
  typeParameter: [color.black, lightColor.yellow, darkColor.green],
  enum: [color.black, lightColor.yellow, darkColor.green],
  enumMember: [color.black, lightColor.gray, darkColor.orange],
  class: [color.black, lightColor.brown, darkColor.white],
}

export const specificTokenColor = <const>{
  htmlTag: [`${color.black} bold`, lightColor.blue, darkColor.pink],
  htmlAttribute: [`${color.black} bold`, lightColor.yellow, darkColor.green],
  jsonKey: [color.black, lightColor.blue, darkColor.pink],
  cssKey: [`${color.black} bold`, lightColor.yellow, darkColor.green],
}

export function formatColor(a: string) {
  const b = a.split(' ')
  return {
    foreground: b.shift(),
    fontStyle: b.join(' ') || '',
  }
}
