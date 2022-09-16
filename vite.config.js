import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export default defineConfig({
  // easier readability in the sandbox
  clearScreen: false,
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes("-") || tag.startsWith('nitrozen-')
        }
      },
      customElement: true
    }),
    new CompressionPlugin({
      test: /\.js$|\.css$|\.html$/,
      algorithm: 'gzip',
  })
],
rules: [{
  test: /\.(jpg|jpeg|gif|png)$/,
  loader: 'file-loader',
  query: {
      name: 'assets/[name].[ext]',
      publicPath: '/'
  }
},
  ]
});

// module.exports = {
//   chainWebpack: config => {
//     // config.resolve.alias.set('vue', '@vue/compat')

//     config.module
//       .rule('vue')
//       .use('vue-loader')
//       .tap(options => {
//         return {
//           ...options,
//           compilerOptions: {
//             isCustomElement: tag => tag.startsWith('nitrozen-') || tag.startsWith("strike") || tag.startsWith("I"),
//             compatConfig: {
//               MODE: 2,
//               ATTR_FALSE_VALUE: false 
//             },
//           }
//         }
//       })
//     }
// }