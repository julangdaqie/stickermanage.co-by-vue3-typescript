const path = require("path");
module.exports = {
    outputDir: "dist",
    assetsDir: "static",
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    devServer: {
        open: false,
        host: "192.168.1.4",
        port: 8088,
        https: false,
        hotOnly: false,
        // proxy: {
        //   '/manage': {
        //     target: 'http://192.168.10.36:80',  // target host
        //     changeOrigin: true,  // needed for virtual hosted sites
        //   },
        // }
    },
    lintOnSave: false,
    productionSourceMap: false,
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "./src/assets/css/myvariables.less")]
        }
    },
};