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
        root: [
            path.resolve('./')
        ],
        extensions: ['', '.js', '.jsx'],
        alias: {
            react: path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom')
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
            },
            {
                test: /.*\.svg$/,
                exclude: /fonts/,
                loaders: [
                    'svg-inline',
                    'svgo-loader?' + svgoConfig
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                exclude: /images/,
                loader: 'file-loader'
            }
        ]
    },
    postcss: function() {
        return [require('autoprefixer')];
    }
};

module.exports = config;

if (devBuild) {
    console.log('Webpack dev build');
    module.exports.devtool = 'eval-source-map';
} else {
    config.plugins.push(
        new webpack.optimize.DedupePlugin()
    );
    console.log('Webpack production build');
}
