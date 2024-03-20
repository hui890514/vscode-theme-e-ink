import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: true,
  typescript: true,
  ignores: ['themes/*'],
  formatters: true,
})
