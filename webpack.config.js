const path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    devtool: 'eval-source-map',
    devServer: {
        host: "localhost",
        port: 3000,
        hot: true, 
        open: true,
        clientLogLevel: "silent"
    },
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test:  /\.ts$/,
                use: 'ts-loader',
                include: [
                    path.resolve(__dirname, './src')
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: '/public/',
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public')
    }
}