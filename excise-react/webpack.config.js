const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: [
            'react-hot-loader/patch',
            './index'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            Containers: './containers'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, enforce: 'pre', loader: 'eslint-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.scss$/,
                use:
                    [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                // moudle: true,
                                sourceMap: true,
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                // moudle: true,
                                sourceMap: true
                            }
                        }
                    ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        hot: true,
        historyApiFallback: true,
        proxy: {
        //   "/api": "http://localhost:3000"
        }
    }
}