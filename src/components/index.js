// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
// ./ab/cd/index.js
const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/)

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  module.exports[componentName] = req(key).default
})
