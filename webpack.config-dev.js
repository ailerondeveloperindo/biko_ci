const path = require('path');

module.exports = {

    mode: 'development',
    entry: './src/index.js',
    watch: true,
    watchOptions: {
      ignored: ['**/node_modules', '**/tests', '**/vendor', '**/writable', '**/public', '**/app']
    },
    output: {
        path: path.resolve(__dirname, 'public/assets/js'),
        filename: "biko.bundle.js"
    },
    module: {
        rules: [
            {
              test: /\.(scss)$/,
              use: [
                {
                    // inject CSS to page
                    loader: 'style-loader'
                  }, {
                    // translates CSS into CommonJS modules
                    loader: 'css-loader'
                  }, {
                    // Run postcss actions
                    loader: 'postcss-loader',
                    options: {
                      // `postcssOptions` is needed for postcss 8.x;
                      // if you use postcss 7.x skip the key
                      postcssOptions: {
                        // postcss plugins, can be exported to postcss.config.js
                        plugins: function () {
                          return [
                            require('autoprefixer')
                          ];
                        }
                      }
                    }
                  }, {
                    // compiles Sass to CSS
                    loader: 'sass-loader'
                  }
              ]  
            }
        ]
    }

};