const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [require.resolve('css-loader')]
                })
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] }}]
                    ]
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};