enum color {
  black = '#000000',
  white = '#FFFFFF',
  lightGray = '#DDDDDD',
  darkGray = '#B4B4B3',
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
  background: [color.white, color.white],
  background2: [color.lightGray, color.lightBrown],
  background3: [color.black, color.brown],
  background4: [color.darkGray, color.purple],
  background5: [color.lightGray, color.green],
  background6: [color.lightGray, color.red],
  foreground: [color.black, color.brown],
  foreground2: [color.darkGray, color.purple],
  foreground3: [color.white, color.blue],
  shadow: [color.white, color.white],
  border: [color.black, color.brown],
  border2: [color.lightGray, color.purple],
  border3: [color.black, color.green],
  border4: [color.black, color.red],
  outline: [color.black, color.brown],
  separator: [color.black, color.brown],
  stroke: [color.black, color.brown],
  highlight: [color.lightGray, color.lightBrown],
  highlight2: [color.darkGray, color.brown],
  error: [color.red, color.red],
  warning: [color.yellow, color.yellow],
  bracket: [color.black, color.blue],
  bracket2: [color.black, color.purple],
  bracket3: [color.black, color.orange],
  bracket4: [color.black, color.green],
  bracket5: [color.black, color.yellow],
  bracket6: [color.black, color.brown],
  bracket7: [color.black, color.black],
}

export const tokenColor = <const>{
  default: [color.black, color.brown],
  variable: [color.black, color.brown],
  meta: [color.black, color.brown],
  entity: [`${color.black} bold`, `${color.purple}`],
  keyword: [`${color.black} italic`, `${color.blue}`],
  support: [`${color.black} italic`, `${color.blue}`],
  storage: [`${color.black} italic`, `${color.blue}`],
  constantLanguage: [`${color.darkGray} italic bold`, `${color.green}`],
  constant: [`${color.darkGray} bold`, `${color.green}`],
  string: [`${color.darkGray} bold`, `${color.green}`],
  comment: [color.lightGray, color.lightGreen],
  invalid: [color.lightGray, color.red],
}

export const semanticTokenColor = <const>{
  namespace: color.brown,
  function: color.purple,
  property: color.brown,
  interface: color.orange,
  type: color.orange,
  typeParameter: color.brown,
  class: color.brown,
  enum: color.brown,
}

export function formatColor(a: string) {
  const b = a.split(' ')
  return {
    foreground: b.shift(),
    fontStyle: b.join(' ') || '',
  }
}
