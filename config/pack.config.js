const path = require('path');

module.exports = function(config) {

    config.entry = {
        index: ['./src/index.js']
    };

    config.resolve = {
        extensions: ['.js', '.vue'], // 同时支持 js 和 vue
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@': path.resolve(process.cwd(), 'src')
        }
    };

    config.runtimeChunk = {
        name: 'manifest'
    };

    config.commonChunks = {
        vendor: ['node_modules']
    };

    return config;
};
