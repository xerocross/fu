// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack')

module.exports = [{
    entry : {
        'functional-utility' : './src/functional-utility.ts'
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
    resolve : {
        extensions : ['.ts', '.js']
    },
    module : {
        rules : [
            {
                test : /\.ts$/,
                exclude : [/node_modules/, /src\/.*\.test\.ts$/, /src\/.*\.d\.ts$/],
                use : [
                    {
                        loader : 'babel-loader',
                        options : {
                            presets : ['@babel/preset-env']
                        }
                    },
                    'ts-loader'
                ]
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