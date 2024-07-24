enum color {
  black = '#000000',
  white = '#FFFFFF',
  lightGray = '#DDDDDD',
  darkGray = '#B4B4B3',
  red = '#B56959',
  blue = '#3f51b5',
  pink = '#AF00DB',
  orange = '#ff9800',
  green = '#2AA198',
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
  meta: [color.black, color.brown],
  entity: [`${color.black} bold`, `${color.pink}`],
  keyword: [`${color.black} italic`, `${color.blue}`],
  support: [`${color.black} italic`, `${color.blue}`],
  storage: [`${color.black} italic`, `${color.blue}`],
  constantLanguage: [`${color.darkGray} italic bold`, `${color.orange}`],
  constant: [`${color.darkGray} bold`, `${color.orange}`],
  string: [`${color.darkGray} bold`, `${color.orange}`],
  comment: [color.lightGray, color.red],
  invalid: [color.lightGray, color.red],
}

export const semanticTokenColor = <const>{
  namespace: color.brown,
  function: color.pink,
  property: color.brown,
  interface: color.green,
  type: color.green,
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
