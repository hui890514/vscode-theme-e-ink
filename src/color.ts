enum color {
  black = '#000000',
  white = '#ffffff',
  lightGray = '#dddddd',
  darkGray = '#b4b4b3',
}

const theme = <const>{
  primary: color.black,
  secondary: color.darkGray,
  background: color.white,
  background2: color.lightGray,
  background3: color.black,
  background4: color.darkGray,
  foreground: color.black,
  foreground2: color.darkGray,
  foreground3: color.white,
  shadow: color.white,
  border: color.black,
  border2: color.lightGray,
  outline: color.black,
  separator: color.black,
  stroke: color.black,
  highlight: color.lightGray,
  highlight2: color.darkGray,
}

const token = <const>{
  default: color.black,
  bold: `${color.black} bold`,
  italic: `${color.black} italic`,
  darkGrayItalicBold: `${color.darkGray} italic bold`,
  darkGrayBold: `${color.darkGray} bold`,
  // darkGray: color.darkGray,
  lightGray: color.lightGray,
  // lightGrayBold: `${color.lightGray} bold`,
}

export { theme, token }
