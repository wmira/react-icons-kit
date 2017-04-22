

const webpack = require('webpack');

const plugins = [];

if ( process.env.NODE_ENV === 'production' ) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }));
}

module.exports = {


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
        inline: true
    }

};
