const colors = {
  black: '#000000',
  white: '#ffffff',
  gray: ['#dddddd', '#b4b4b3']
}

const theme = {
  primary: colors.black,
  secondary: colors.gray[1],
  background: colors.white,
  background2: colors.gray[0],
  background3: colors.black,
  background4: colors.gray[1],
  foreground: colors.black,
  foreground2: colors.gray[1],
  foreground3: colors.white,
  shadow: colors.white,
  border: colors.black,
  border2: colors.gray[0],
  outline: colors.black,
  separator: colors.black,
  stroke: colors.black,
  highlight: colors.gray[0],
  highlight2: colors.gray[1]
}

const tokens = {
  default: colors.black,
  bold: colors.black + ' bold',
  italic: colors.black + ' italic',
  grayItalic: colors.gray[1] + ' italic',
  gray: colors.gray[1],
  gray2: colors.gray[0],
  format: (a: string) => {
    const b = a.split(' ')
    return {
      foreground: b[0],
      fontStyle: b[1] || ''
    }
  }
}

export { theme, tokens }
