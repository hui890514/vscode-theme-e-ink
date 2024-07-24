enum color {
  black = '#000000',
  white = '#FFFFFF',
  lightGray = '#DDDDDD',
  darkGray = '#B4B4B3',
  red = '#B56959',
  blue = '#3F51B5',
  pink = '#AF00DB',
  orange = '#FF9800',
  lightGreen = '#2AA198',
  green = '#1CB01C',
  brown = '#795548',
}

export const theme = <const>{
  background: [color.white, color.white],
  background2: [color.lightGray, color.lightGray],
  background3: [color.black, color.black],
  background4: [color.darkGray, color.darkGray],
  foreground: [color.black, color.black],
  foreground2: [color.darkGray, color.darkGray],
  foreground3: [color.white, color.white],
  shadow: [color.white, color.white],
  border: [color.black, color.black],
  border2: [color.lightGray, color.lightGray],
  outline: [color.black, color.black],
  separator: [color.black, color.black],
  stroke: [color.black, color.black],
  highlight: [color.lightGray, color.lightGray],
  highlight2: [color.darkGray, color.darkGray],
}

export const tokenColor = <const>{
  default: [color.black, color.brown],
  variable: [color.black, color.brown],
  meta: [color.black, color.brown],
  entity: [`${color.black} bold`, `${color.pink}`],
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
  function: color.pink,
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
