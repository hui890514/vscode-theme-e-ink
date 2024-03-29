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

  'constant': token.darkGray,
  'constant.numeric': token.darkGray,
  'constant.character': token.darkGray,
  'constant.character.escape': token.darkGray,
  'constant.language': token.darkGrayItalic,
  'constant.other': token.darkGray,

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
  'markup.underline': token.darkGray,
  'markup.underline.link': token.darkGray,
  'markup.bold': token.bold,
  'markup.heading': token.darkGray,
  'markup.italic': token.italic,
  'markup.list': token.darkGray,
  'markup.list.numbered': token.darkGray,
  'markup.list.unnumbered': token.darkGray,
  'markup.quote': token.darkGray,
  'markup.raw': token.darkGray,
  'markup.other': token.default,

  'meta': token.default,

  'storage': token.italic,
  'storage.type': token.italic,
  'storage.modifier': token.italic,

  'string': token.darkGray,
  'string.quoted': token.darkGray,
  'string.quoted.single': token.darkGray,
  'string.quoted.double': token.darkGray,
  'string.quoted.triple': token.darkGray,
  'string.quoted.other': token.darkGray,
  'string.unquoted': token.darkGray,
  'string.interpolated': token.darkGray,
  'string.regexp': token.darkGray,
  'string.other': token.darkGray,

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
    foreground: b[0],
    fontStyle: b[1] || '',
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
