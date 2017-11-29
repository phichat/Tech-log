
const patn = require('path')
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: [
            './index'
        ]
    },
    module:{
        rules:[
            {test: /\.js$/, exculde: /node_module/, loader: 'babel-loader'}
        ]
    }
}