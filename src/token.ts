import { token } from './color'

interface TokenObject {
  [index: string]: string
}

const basic: TokenObject = {
  // https://macromates.com/manual/en/language_grammars
  'comment': token.lightGray,
  'comment.line': token.lightGray,
  'comment.line.double-slash': token.lightGray,
  'comment.line.double-dash': token.lightGray,
  'comment.line.number-sign': token.lightGray,
  'comment.line.percentage': token.lightGray,
  'comment.line.character': token.lightGray,
  'comment.block': token.lightGray,
  'comment.block.documentation': token.lightGray,

  'constant': token.darkGrayBold,
  'constant.numeric': token.darkGrayBold,
  'constant.character': token.darkGrayBold,
  'constant.character.escape': token.darkGrayBold,
  'constant.language': token.darkGrayItalicBold,
  'constant.other': token.darkGrayBold,

  'entity': token.bold,
  'entity.name': token.bold,
  'entity.name.function': token.bold,
  'entity.name.type': token.bold,
  'entity.name.tag': token.bold,
  'entity.name.section': token.bold,
  'entity.other': token.bold,
  'entity.other.inherited-class': token.bold,
  'entity.other.attribute-name': token.bold,

  'invalid': token.lightGray,
  'invalid.illegal': token.lightGray,
  'invalid.deprecated': token.lightGray,

  'keyword': token.italic,
  'keyword.control': token.italic,
  'keyword.operator': token.italic,
  'keyword.other': token.italic,

  'markup': token.default,
  'markup.underline': token.darkGrayBold,
  'markup.underline.link': token.darkGrayBold,
  'markup.bold': token.bold,
  'markup.heading': token.darkGrayBold,
  'markup.italic': token.italic,
  'markup.list': token.darkGrayBold,
  'markup.list.numbered': token.darkGrayBold,
  'markup.list.unnumbered': token.darkGrayBold,
  'markup.quote': token.darkGrayBold,
  'markup.raw': token.darkGrayBold,
  'markup.other': token.default,

  'meta': token.default,

  'storage': token.italic,
  'storage.type': token.italic,
  'storage.modifier': token.italic,

  'string': token.darkGrayBold,
  'string.quoted': token.darkGrayBold,
  'string.quoted.single': token.darkGrayBold,
  'string.quoted.double': token.darkGrayBold,
  'string.quoted.triple': token.darkGrayBold,
  'string.quoted.other': token.darkGrayBold,
  'string.unquoted': token.darkGrayBold,
  'string.interpolated': token.darkGrayBold,
  'string.regexp': token.darkGrayBold,
  'string.other': token.darkGrayBold,

  'support': token.italic,
  'support.function': token.italic,
  'support.class': token.italic,
  'support.type': token.italic,
  'support.constant': token.italic,
  'support.variable': token.italic,
  'support.other': token.italic,

  'variable': token.default,
  'variable.parameter': token.default,
  'variable.language': token.italic,
  'variable.other': token.default,
}

const JSON: TokenObject = {
  'support.type.property-name.json': token.default,
}

const YAML: TokenObject = {
  'entity.name.tag.yaml': token.default,
}

// format
function formatColor(a: string) {
  const b = a.split(' ')
  return {
    foreground: b.shift(),
    fontStyle: b.join(' ') || '',
  }
}

const _tokenColors: { [index: string]: string[] } = {}
const rules = { ...basic, ...JSON, ...YAML }
for (const rule of Object.keys(rules))
  (_tokenColors[rules[rule]] ??= []).push(rule)
const tokenColors = Object.keys(_tokenColors).map(key => ({
  scope: _tokenColors[key],
  settings: formatColor(key),
}))

export { tokenColors }
