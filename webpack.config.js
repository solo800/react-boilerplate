

module.exports = {
    entry: './src/javascript/app.js',
    output: {
        path: __dirname + '/dist/javascript',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ['/node_modules/', '/dist/'],
                use:[{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015'],
                    }
                }],
            },
        ]
    },
};