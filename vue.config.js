module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/apps/app_crm/' : '/',
    devServer: {
        host: 'localhost'
    }
}