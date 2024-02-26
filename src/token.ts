import { tokens } from './color'

const basic = {
  // https://macromates.com/manual/en/language_grammars
  comment: tokens.gray2,
  'comment.line': tokens.gray2,
  'comment.line.double-slash': tokens.gray2,
  'comment.line.double-dash': tokens.gray2,
  'comment.line.number-sign': tokens.gray2,
  'comment.line.percentage': tokens.gray2,
  'comment.line.character': tokens.gray2,
  'comment.block': tokens.gray2,
  'comment.block.documentation': tokens.gray2,

  constant: tokens.gray,
  'constant.numeric': tokens.gray,
  'constant.character': tokens.gray,
  'constant.character.escape': tokens.gray,
  'constant.language': tokens.grayItalic,
  'constant.other': tokens.gray,

  entity: tokens.bold,
  'entity.name': tokens.bold,
  'entity.name.function': tokens.bold,
  'entity.name.type': tokens.bold,
  'entity.name.tag': tokens.bold,
  'entity.name.section': tokens.bold,
  'entity.other': tokens.bold,
  'entity.other.inherited-class': tokens.bold,
  'entity.other.attribute-name': tokens.bold,

  invalid: tokens.gray2,
  'invalid.illegal': tokens.gray2,
  'invalid.deprecated': tokens.gray2,

  keyword: tokens.italic,
  'keyword.control': tokens.italic,
  'keyword.operator': tokens.italic,
  'keyword.other': tokens.italic,

  markup: tokens.default,
  'markup.underline': tokens.gray,
  'markup.underline.link': tokens.gray,
  'markup.bold': tokens.bold,
  'markup.heading': tokens.gray,
  'markup.italic': tokens.italic,
  'markup.list': tokens.gray,
  'markup.list.numbered': tokens.gray,
  'markup.list.unnumbered': tokens.gray,
  'markup.quote': tokens.gray,
  'markup.raw': tokens.gray,
  'markup.other': tokens.default,

  meta: tokens.default,

  storage: tokens.italic,
  'storage.type': tokens.italic,
  'storage.modifier': tokens.italic,

  string: tokens.gray,
  'string.quoted': tokens.gray,
  'string.quoted.single': tokens.gray,
  'string.quoted.double': tokens.gray,
  'string.quoted.triple': tokens.gray,
  'string.quoted.other': tokens.gray,
  'string.unquoted': tokens.gray,
  'string.interpolated': tokens.gray,
  'string.regexp': tokens.gray,
  'string.other': tokens.gray,

  support: tokens.italic,
  'support.function': tokens.italic,
  'support.class': tokens.italic,
  'support.type': tokens.italic,
  'support.constant': tokens.italic,
  'support.variable': tokens.italic,
  'support.other': tokens.italic,

  variable: tokens.default,
  'variable.parameter': tokens.default,
  'variable.language': tokens.italic,
  'variable.other': tokens.default
}
const JSON = {
  'support.type.property-name.json': tokens.default
}
const YAML = {
  'entity.name.tag.yaml': tokens.default
}

const rules = { ...basic, ...JSON, ...YAML }
const _tokenColors = {}
for (const rule of Object.keys(rules)) {
  if (!_tokenColors[rules[rule]]) _tokenColors[rules[rule]] = [rule]
  else _tokenColors[rules[rule]].push(rule)
}
export const tokenColors = Object.keys(_tokenColors).map(key => ({
  scope: _tokenColors[key],
  settings: tokens.format(key)
}))
