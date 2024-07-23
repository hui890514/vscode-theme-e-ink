enum color {
  black = '#000000',
  white = '#FFFFFF',
  lightGray = '#DDDDDD',
  darkGray = '#B4B4B3',
  red = '#CB4B16',
  blue = '#3f51b5',
  pink = '#AF00DB',
  orange = '#ff9800',
  green = '#2AA198',
  brown = '#795548',
}

const theme = <const>{
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

const token = <const>{
  default: [color.black, color.brown],
  meta: [color.black, color.brown],
  entity: [`${color.black} bold`, `${color.pink}`],
  keyword: [`${color.black} italic`, `${color.orange}`],
  support: [`${color.black} italic`, `${color.orange}`],
  storage: [`${color.black} italic`, `${color.orange}`],
  constantLanguage: [`${color.darkGray} italic bold`, `${color.blue}`],
  constant: [`${color.darkGray} bold`, `${color.blue}`],
  string: [`${color.darkGray} bold`, `${color.blue}`],
  comment: [color.lightGray, color.green],
  invalid: [color.lightGray, color.green],
}

export { theme, token }
