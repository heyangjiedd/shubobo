const webpack = require('webpack')
module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: []
        }
    },
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ],
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({

                $: "jquery",

                jQuery: "jquery",

                "windows.jQuery": "jquery"

            })

        ]
    }
}
