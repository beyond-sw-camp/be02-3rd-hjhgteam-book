const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


// module.exports = {
//   ...defineConfig({
//     transpileDependencies: true
//   }),
//   devServer: {
//     proxy: 'http://3.34.199.45:8080'
//   }
// };