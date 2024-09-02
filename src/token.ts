import { formatColor, otherTokenColor, semanticTokenColor, tokenColor } from './color'
import type { Index } from '.'

interface TokenObject {
  [index: string]: readonly [string, string, string]
}

const basic: TokenObject = {
  // https://macromates.com/manual/en/language_grammars
  'comment': tokenColor.comment,
  'comment.line': tokenColor.comment,
  'comment.line.double-slash': tokenColor.comment,
  'comment.line.double-dash': tokenColor.comment,
  'comment.line.number-sign': tokenColor.comment,
  'comment.line.percentage': tokenColor.comment,
  'comment.line.character': tokenColor.comment,
  'comment.block': tokenColor.comment,
  'comment.block.documentation': tokenColor.comment,

  'constant': tokenColor.constant,
  'constant.numeric': tokenColor.constant,
  'constant.character': tokenColor.constant,
  'constant.character.escape': tokenColor.constant,
  'constant.language': tokenColor.constantLanguage,
  'constant.other': tokenColor.constant,

  'entity': tokenColor.entity,
  'entity.name': tokenColor.entity,
  'entity.name.function': tokenColor.entity,
  'entity.name.type': tokenColor.entity,
  'entity.name.tag': tokenColor.entity,
  'entity.name.section': tokenColor.entity,
  'entity.other': tokenColor.entity,
  'entity.other.inherited-class': tokenColor.entity,
  'entity.other.attribute-name': tokenColor.entity,

  'invalid': tokenColor.invalid,
  'invalid.illegal': tokenColor.invalid,
  'invalid.deprecated': tokenColor.invalid,

  'keyword': tokenColor.keyword,
  'keyword.control': tokenColor.keyword,
  'keyword.operator': tokenColor.keyword,
  'keyword.other': tokenColor.keyword,

  'markup': tokenColor.default,
  'markup.underline': tokenColor.constant,
  'markup.underline.link': tokenColor.constant,
  'markup.bold': tokenColor.entity,
  'markup.heading': tokenColor.constant,
  'markup.italic': tokenColor.keyword,
  'markup.list': tokenColor.constant,
  'markup.list.numbered': tokenColor.constant,
  'markup.list.unnumbered': tokenColor.constant,
  'markup.quote': tokenColor.constant,
  'markup.raw': tokenColor.constant,
  'markup.other': tokenColor.default,

  'meta': tokenColor.meta,

  'storage': tokenColor.storage,
  'storage.type': tokenColor.storage,
  'storage.modifier': tokenColor.storage,

  'string': tokenColor.string,
  'string.quoted': tokenColor.string,
  'string.quoted.single': tokenColor.string,
  'string.quoted.double': tokenColor.string,
  'string.quoted.triple': tokenColor.string,
  'string.quoted.other': tokenColor.string,
  'string.unquoted': tokenColor.string,
  'string.interpolated': tokenColor.string,
  'string.regexp': tokenColor.string,
  'string.other': tokenColor.string,

  'support': tokenColor.support,
  'support.function': tokenColor.support,
  'support.class': tokenColor.support,
  'support.type': tokenColor.support,
  'support.constant': tokenColor.support,
  'support.variable': tokenColor.support,
  'support.other': tokenColor.support,

  'variable': tokenColor.variable,
  'variable.parameter': tokenColor.variable,
  'variable.language': tokenColor.keyword,
  'variable.other': tokenColor.variable,
}

const HTML: TokenObject = {
  'entity.name.tag.html': otherTokenColor.HTMLTag,
  'text.html.derivative': tokenColor.string,
  'entity.other.attribute-name.html': semanticTokenColor.type,
}

const JSON: TokenObject = {
  'support.type.property-name.json': otherTokenColor.JSONKey,
}

const YAML: TokenObject = {
  'entity.name.tag.yaml': otherTokenColor.JSONKey,
}

const markdown: TokenObject = {
  'meta.link.inline.markdown': tokenColor.keyword,
}

export function getTokenColors(index: Index) {
  const tokenColors: { [index: string]: string[] } = {}
  const rules = { ...basic, ...HTML, ...JSON, ...YAML, ...markdown }
  for (const rule of Object.keys(rules))
    (tokenColors[rules[rule][index]] ??= []).push(rule)
  return Object.keys(tokenColors).map(key => ({
    scope: tokenColors[key],
    settings: formatColor(key),
  }))
}

export function getSemanticTokenColors(index: Index) {
  const h = (colors: readonly [string, string, string]) => colors[index]
  return {
    semanticHighlighting: true,
    semanticTokenColors: {
      namespace: formatColor(h(semanticTokenColor.namespace)),
      function: formatColor(h(semanticTokenColor.function)),
      property: formatColor(h(semanticTokenColor.property)),
      interface: formatColor(h(semanticTokenColor.interface)),
      type: formatColor(h(semanticTokenColor.type)),
      typeParameter: formatColor(h(semanticTokenColor.typeParameter)),
      class: formatColor(h(semanticTokenColor.class)),
      enum: formatColor(h(semanticTokenColor.enum)),
    },
  }
}
