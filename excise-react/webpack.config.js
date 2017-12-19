const path = require('path')
const webpack = require('webpack')
const cssModuleRules = [
    'style-loader',
    {
        loader: 'css-loader',
        options: {
            module: true,
            sourceMap: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            sourceMap: true
        }
    }
]

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
        extensions: [".js", ".json", ".scss"]
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, enforce: 'pre', loader: 'eslint-loader' },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, exclude: /node_modules/, use: cssModuleRules },
            { test: /\.css$/, include: /node_modules/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.scss$/,
                use: [
                    ...cssModuleRules,
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        hot: true,
        historyApiFallback: true,
        proxy: {
              "/soap": "http://localhost:3000",
              "/rest": "http://"
        }
    }
}