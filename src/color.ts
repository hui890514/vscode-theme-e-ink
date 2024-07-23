enum color {
  black = '#000000',
  white = '#ffffff',
  lightGray = '#dddddd',
  darkGray = '#b4b4b3',
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
  default: [color.black, color.black],
  meta: [color.black, color.black],
  entity: [`${color.black} bold`, `${color.black} bold`],
  keyword: [`${color.black} italic`, `${color.black} italic`],
  support: [`${color.black} italic`, `${color.black} italic`],
  storage: [`${color.black} italic`, `${color.black} italic`],
  constantLanguage: [`${color.darkGray} italic bold`, `${color.darkGray} italic bold`],
  constant: [`${color.darkGray} bold`, `${color.darkGray} bold`],
  string: [`${color.darkGray} bold`, `${color.darkGray} bold`],
  comment: [color.lightGray, color.lightGray],
  invalid: [color.lightGray, color.lightGray],
}

export { theme, token }
