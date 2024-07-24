import { formatColor, semanticTokenColor, tokenColor } from './color'

interface TokenObject {
  [index: string]: readonly [string, string]
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

  'variable': tokenColor.default,
  'variable.parameter': tokenColor.default,
  'variable.language': tokenColor.keyword,
  'variable.other': tokenColor.default,
}

const JSON: TokenObject = {
  'support.type.property-name.json': tokenColor.default,
}

const YAML: TokenObject = {
  'entity.name.tag.yaml': tokenColor.default,
}

export function getTokenColors(isColor = false) {
  const tokenColors: { [index: string]: string[] } = {}
  const rules = { ...basic, ...JSON, ...YAML }
  const i = isColor ? 1 : 0
  for (const rule of Object.keys(rules))
    (tokenColors[rules[rule][i]] ??= []).push(rule)
  return Object.keys(tokenColors).map(key => ({
    scope: tokenColors[key],
    settings: formatColor(key),
  }))
}

export function getsemanticTokenColors(isColor = false) {
  if (isColor) {
    return {
      semanticHighlighting: true,
      semanticTokenColors: {
        namespace: semanticTokenColor.namespace,
        function: semanticTokenColor.function,
        property: semanticTokenColor.property,
        interface: semanticTokenColor.interface,
        type: semanticTokenColor.type,
        typeParameter: semanticTokenColor.typeParameter,
        class: semanticTokenColor.class,
        enum: semanticTokenColor.enum,
      },
    }
  }
}
