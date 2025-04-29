import { formatColor, semanticTokenColor, specificTokenColor, tokenColor } from './color'
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

const html: TokenObject = {
  'entity.name.tag.html': specificTokenColor.htmlTag,
  'entity.other.attribute-name.html': specificTokenColor.htmlAttribute,
  'text.html.derivative': tokenColor.string,
  'punctuation.separator.key-value.html': tokenColor.keyword,
}

const css: TokenObject = {
  'entity.other.attribute-name.pseudo-class.css': tokenColor.keyword,
  'entity.other.attribute-name.pseudo-element.css': tokenColor.keyword,
  'entity.other.attribute-name.class.css': tokenColor.string,
  'entity.name.tag.css': tokenColor.keyword,
  'entity.name.tag.wildcard.css': tokenColor.keyword,
  'support.type.property-name.css': specificTokenColor.cssKey,
  'support.type.property-name.media.css': specificTokenColor.cssKey,
}

const js: TokenObject = {
  'punctuation.separator.key-value.js': tokenColor.keyword,
  'punctuation.definition.template-expression.begin.js': tokenColor.keyword,
  'punctuation.definition.template-expression.end.js': tokenColor.keyword,
}

const ts: TokenObject = {
  'punctuation.separator.key-value.ts': tokenColor.keyword,
  'punctuation.definition.template-expression.begin.ts': tokenColor.keyword,
  'punctuation.definition.template-expression.end.ts': tokenColor.keyword,
  'support.type.builtin.ts': semanticTokenColor.type,
  'support.type.primitive.ts': semanticTokenColor.type,
}

const vue: TokenObject = {
  'entity.name.tag.script.html.vue': specificTokenColor.htmlTag,
  'entity.name.tag.template.html.vue': specificTokenColor.htmlTag,
  'entity.name.tag.style.html.vue': specificTokenColor.htmlTag,
  'punctuation.attribute-shorthand.bind.html.vue': tokenColor.keyword,
  'punctuation.attribute-shorthand.event.html.vue': tokenColor.keyword,
  'punctuation.definition.string.begin.html.vue': tokenColor.keyword,
  'punctuation.definition.string.end.html.vue': tokenColor.keyword,
}

const json: TokenObject = {
  'support.type.property-name.json': specificTokenColor.jsonKey,
}

const yaml: TokenObject = {
  'entity.name.tag.yaml': specificTokenColor.jsonKey,
}

const md: TokenObject = {
  'punctuation.definition.link.title.begin.markdown': tokenColor.keyword,
  'punctuation.definition.link.title.end.markdown': tokenColor.keyword,
  'punctuation.definition.metadata.markdown': tokenColor.keyword,
  'punctuation.definition.bold.markdown': tokenColor.keyword,
  'punctuation.definition.link.description.begin.markdown': tokenColor.keyword,
  'punctuation.definition.link.description.end.markdown': tokenColor.keyword,
  'punctuation.definition.raw.markdown': tokenColor.keyword,
  'punctuation.definition.markdown': tokenColor.keyword,
  'markup.inline.raw.string.markdown': tokenColor.keyword,
  'markup.bold.markdown': tokenColor.keyword,
  'string.other.link.title.markdown': tokenColor.keyword,
  'string.other.link.description.markdown': tokenColor.keyword,
  'fenced_code.block.language.markdown': tokenColor.entity,
}

export function getTokenColors(index: Index) {
  const tokenColors: { [index: string]: string[] } = {}
  const rules = { ...basic, ...html, ...json, ...yaml, ...md, ...css, ...vue, ...ts, ...js }
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
      enumMember: formatColor(h(semanticTokenColor.enumMember)),
    },
  }
}
