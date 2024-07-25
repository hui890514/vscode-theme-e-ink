enum color {
  black = '#000000',
  white = '#FFFFFF',
  lightGray = '#DDDDDD',
  darkGray = '#B4B4B3',
  red = '#b5200d',
  yellow = '#cca300',
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
  yellow = '#cca300',
}

enum darkColor {
  black = '#000000',
  lightBlack = '#141523',
  white = '#FFFFFF',
  red = '#b5200d',
  blue = '#3F51B5',
  purple = '#AF00DB',
  orange = '#FF9800',
  lightGreen = '#2AA198',
  green = '#1CB01C',
  brown = '#795548',
  lightBrown = '#DAB0A1',
  yellow = '#cca300',
}

export const theme = <const>{
  background: [color.white, lightColor.white, darkColor.lightBlack],
  background2: [color.lightGray, lightColor.lightBrown, darkColor.lightBrown],
  background3: [color.black, lightColor.brown, darkColor.brown],
  background4: [color.darkGray, lightColor.purple, darkColor.purple],
  background5: [color.lightGray, lightColor.green, darkColor.green],
  background6: [color.lightGray, lightColor.red, darkColor.red],
  foreground: [color.black, lightColor.brown, darkColor.brown],
  foreground2: [color.darkGray, lightColor.purple, darkColor.purple],
  foreground3: [color.white, lightColor.blue, darkColor.blue],
  shadow: [color.white, lightColor.white, darkColor.white],
  border: [color.black, lightColor.brown, darkColor.brown],
  border2: [color.lightGray, lightColor.purple, darkColor.purple],
  border3: [color.black, lightColor.green, darkColor.green],
  border4: [color.black, lightColor.red, darkColor.red],
  outline: [color.black, lightColor.brown, darkColor.brown],
  separator: [color.black, lightColor.brown, darkColor.brown],
  stroke: [color.black, lightColor.brown, darkColor.brown],
  highlight: [color.lightGray, lightColor.lightBrown, darkColor.lightBrown],
  highlight2: [color.darkGray, lightColor.brown, darkColor.brown],
  error: [color.red, lightColor.red, darkColor.red],
  warning: [color.yellow, lightColor.yellow, darkColor.yellow],
  bracket: [color.black, lightColor.blue, darkColor.blue],
  bracket2: [color.black, lightColor.purple, darkColor.purple],
  bracket3: [color.black, lightColor.orange, darkColor.orange],
  bracket4: [color.black, lightColor.green, darkColor.green],
  bracket5: [color.black, lightColor.yellow, darkColor.yellow],
  bracket6: [color.black, lightColor.brown, darkColor.brown],
  bracket7: [color.black, lightColor.black, darkColor.black],
}

export const tokenColor = <const>{
  default: [color.black, lightColor.brown, darkColor.brown],
  variable: [color.black, lightColor.brown, darkColor.brown],
  meta: [color.black, lightColor.brown, darkColor.brown],
  entity: [`${color.black} bold`, `${lightColor.purple}`, `${darkColor.purple}`],
  keyword: [`${color.black} italic`, `${lightColor.blue}`, `${darkColor.blue}`],
  support: [`${color.black} italic`, `${lightColor.blue}`, `${darkColor.blue}`],
  storage: [`${color.black} italic`, `${lightColor.blue}`, `${darkColor.blue}`],
  constantLanguage: [`${color.darkGray} italic bold`, `${lightColor.green}`, `${darkColor.green}`],
  constant: [`${color.darkGray} bold`, `${lightColor.green}`, `${darkColor.green}`],
  string: [`${color.darkGray} bold`, `${lightColor.green}`, `${darkColor.green}`],
  comment: [color.lightGray, lightColor.lightGreen, darkColor.lightGreen],
  invalid: [color.lightGray, lightColor.red, darkColor.red],
}

export const semanticTokenColor = <const>{
  namespace: [color.black, lightColor.brown, darkColor.brown],
  function: [`${color.black} bold`, lightColor.purple, darkColor.purple],
  property: [color.black, lightColor.brown, darkColor.brown],
  interface: [`${color.black} bold`, lightColor.orange, darkColor.orange],
  type: [`${color.black} bold`, lightColor.orange, darkColor.orange],
  typeParameter: [color.black, lightColor.brown, darkColor.brown],
  class: [color.black, lightColor.brown, darkColor.brown],
  enum: [color.black, lightColor.brown, darkColor.brown],
}

export function formatColor(a: string) {
  const b = a.split(' ')
  return {
    foreground: b.shift(),
    fontStyle: b.join(' ') || '',
  }
}
