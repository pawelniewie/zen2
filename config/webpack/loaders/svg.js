const svgoConfig = JSON.stringify({
    plugins: [
        {removeTitle: true},
        {convertColors: {shorthex: false}},
        {convertPathData: false}
    ]
});

module.exports = {
    test: /.*\.svg$/,
    exclude: /fonts/,
    enforce: "pre",
    loaders: [
        'svgo-loader?' + svgoConfig
    ]
}
