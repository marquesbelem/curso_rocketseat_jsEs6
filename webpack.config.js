module.exports = {
    entry: ['@babel/polyfill','./src/main.js'],  //arquivo principal
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },  // arquivo de saida
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    },
};