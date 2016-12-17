
const path = require('path');
const webpack = require('webpack');

const plugins = []; 


module.exports = {

    resolve: {
        alias: {
            'react-icons-kit': path.join(__dirname, 'src')            
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
