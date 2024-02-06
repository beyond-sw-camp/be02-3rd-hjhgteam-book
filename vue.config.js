// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//     transpileDependencies: true,
//     devServer: {
//         proxy: {
//             "/api": {
//                 target: "http://http://www.bookspedia.kro.kr",
//                 changeOrigin: true,
//                 pathRewrite: {
//                     "^/api": "",
//                 },
//             },
//         },
//     },
// });

module.exports = {
    publicPath: "",
    // publicPath: "/dist/",
    // indexPath: "index.html",
};

// module.exports = {
//   ...defineConfig({
//     transpileDependencies: true
//   }),
//   devServer: {
//     proxy: 'http://3.34.199.45:8080'
//   }
// };
