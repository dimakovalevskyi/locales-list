const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const banner = require('./banner');

let webpackConfig = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, `./build`),
        filename: '[name].js',
        library: 'LocalesList',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: require('os').tmpdir(),
                        presets: ['es2015', 'stage-0'],
                        plugins: ['add-module-exports', 'transform-runtime'],
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new CleanWebpackPlugin(['./build']),
        new webpack.BannerPlugin({ banner })
    ],
};

module.exports = webpackConfig;
