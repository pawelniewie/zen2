const webpack = require('webpack');
const path = require('path');

const devBuild = process.env.NODE_ENV !== 'production';

const svgoConfig = JSON.stringify({
    plugins: [
        {removeTitle: true},
        {convertColors: {shorthex: false}},
        {convertPathData: false}
    ]
});

const config = {
    stats: {
        warnings: false
    },
    resolve: {
        modules: [
            path.join(__dirname, "."),
            "node_modules",
        ],
        extensions: ['.js', '.jsx'],
        alias: {
            react: path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom')
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            },
            '__DEV__': process.env.NODE_ENV !== "production"
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader?sourceMap", "postcss-loader"]
            },
            {
                test: /.*\.svg$/,
                exclude: /fonts/,
                loaders: [
                    'url-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                exclude: /images/,
                loader: 'file-loader'
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            },
            {
                test: /.*\.svg$/,
                exclude: /fonts/,
                enforce: "pre",
                loaders: [
                    'svgo-loader?' + svgoConfig
                ]
            }
        ],
    },
    // postcss: function() {
    //     return [require('autoprefixer')];
    // }
};

module.exports = config;

if (devBuild) {
    module.exports.devtool = 'eval-source-map';
} else {
    config.plugins.push(
        new webpack.optimize.DedupePlugin()
    );
}
