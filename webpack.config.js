
const path = require('path');
const webpack = require('webpack');

const plugins = []; 
// const plugins = [new webpack.optimize.UglifyJsPlugin({
//      compress: {
//         warnings: false,
//         dead_code: true,
//         unused: true
//      }
// })];

module.exports = {

    resolve: {
        alias: {
            'react-reacticons': path.join(__dirname, 'src')            
        }
    },
    node: {
        buffer: false
    },

    plugins,

    module: {
        loaders: [            
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },

    devServer: {
        port: 8081,
        contentBase: 'site',
        inline: true        
    }

};
