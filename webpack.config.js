const path = require('path')
const webpack = require('webpack')

module.exports = [{
    entry : {
        'fu' : './src/functional-utility.js'
    },
    output : {
        globalObject : "this",
        path : path.resolve(__dirname, './dist'),
        publicPath : '/dist',
        filename : '[name].js',
        library : "xerocross.FU",
        libraryTarget : "umd",
        umdNamedDefine : true
    },
    module : {
        rules : [
            {
                test : /\.m?js$/,
                exclude : /(node_modules|bower_components)/,
                use : {
                    loader : 'babel-loader'
                }
            }
        ]
    },
    optimization : {
        minimize : false
    },
    plugins : [
        new webpack.DefinePlugin({
            'NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
        })
    ]
}]