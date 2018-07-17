const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = function(webpackConfig) {

    webpackConfig.module.rules.unshift({
        test: /\.(vue)$/,
        loader: 'vue-loader',
        exclude: /node_modules/
    });

    webpackConfig.plugins.push(new VueLoaderPlugin());

    return webpackConfig;
};
