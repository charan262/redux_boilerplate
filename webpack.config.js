var config;
config = {
    entry: './index.js',

    output: {
        path: '/',
        filename: 'bundle.js',
    },

    devServer: {
        inline: true,
        port: 3000
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }


        ]
    }]
}};

module.exports = config;
