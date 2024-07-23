import { token } from './color'

interface TokenObject {
  [index: string]: readonly string[]
}

const basic: TokenObject = {
  // https://macromates.com/manual/en/language_grammars
  'comment': token.comment,
  'comment.line': token.comment,
  'comment.line.double-slash': token.comment,
  'comment.line.double-dash': token.comment,
  'comment.line.number-sign': token.comment,
  'comment.line.percentage': token.comment,
  'comment.line.character': token.comment,
  'comment.block': token.comment,
  'comment.block.documentation': token.comment,

  'constant': token.constant,
  'constant.numeric': token.constant,
  'constant.character': token.constant,
  'constant.character.escape': token.constant,
  'constant.language': token.constantLanguage,
  'constant.other': token.constant,

  'entity': token.entity,
  'entity.name': token.entity,
  'entity.name.function': token.entity,
  'entity.name.type': token.entity,
  'entity.name.tag': token.entity,
  'entity.name.section': token.entity,
  'entity.other': token.entity,
  'entity.other.inherited-class': token.entity,
  'entity.other.attribute-name': token.entity,

  'invalid': token.invalid,
  'invalid.illegal': token.invalid,
  'invalid.deprecated': token.invalid,

  'keyword': token.keyword,
  'keyword.control': token.keyword,
  'keyword.operator': token.keyword,
  'keyword.other': token.keyword,

  'markup': token.default,
  'markup.underline': token.constant,
  'markup.underline.link': token.constant,
  'markup.bold': token.entity,
  'markup.heading': token.constant,
  'markup.italic': token.keyword,
  'markup.list': token.constant,
  'markup.list.numbered': token.constant,
  'markup.list.unnumbered': token.constant,
  'markup.quote': token.constant,
  'markup.raw': token.constant,
  'markup.other': token.default,

  'meta': token.meta,

  'storage': token.storage,
  'storage.type': token.storage,
  'storage.modifier': token.storage,

  'string': token.string,
  'string.quoted': token.string,
  'string.quoted.single': token.string,
  'string.quoted.double': token.string,
  'string.quoted.triple': token.string,
  'string.quoted.other': token.string,
  'string.unquoted': token.string,
  'string.interpolated': token.string,
  'string.regexp': token.string,
  'string.other': token.string,

  'support': token.support,
  'support.function': token.support,
  'support.class': token.support,
  'support.type': token.support,
  'support.constant': token.support,
  'support.variable': token.support,
  'support.other': token.support,

  'variable': token.default,
  'variable.parameter': token.default,
  'variable.language': token.keyword,
  'variable.other': token.default,
}

const JSON: TokenObject = {
  'support.type.property-name.json': token.default,
}

const YAML: TokenObject = {
  'entity.name.tag.yaml': token.default,
}

function formatColor(a: string) {
  const b = a.split(' ')
  return {
    foreground: b.shift(),
    fontStyle: b.join(' ') || '',
  }
}

export function getTokenColors(isColor = false) {
  const _tokenColors: { [index: string]: string[] } = {}
  const rules = { ...basic, ...JSON, ...YAML }
  const i = isColor ? 1 : 0
  for (const rule of Object.keys(rules))
    (_tokenColors[rules[rule][i]] ??= []).push(rule)
  return Object.keys(_tokenColors).map(key => ({
    scope: _tokenColors[key],
    settings: formatColor(key),
  }))
}
