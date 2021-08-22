module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-demo-2-website/'
        : '/',
    lintOnSave: false,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'dispatch'
                return args
            })
    }
}
