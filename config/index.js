// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
	build: {
		env: require('./prod.env'),
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		productionSourceMap: false,
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],
		port: 9000,
        	sellUrl: 'http://sell.com',
        	openidUrl: 'http://x18500i604.iok.la/sell/wechat/authorize',
        	wechatPayUrl: 'http://x18500i604.iok.la/sell/pay/'
	},
	dev: {
		env: require('./dev.env'),
		port: 80,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {},
		cssSourceMap: false,
    sellUrl: 'http://192.168.1.45',
    openidUrl: 'http://x18500i604.iok.la/sell/wechat/authorize',
    wechatPayUrl: 'http://x18500i604.iok.la/sell/pay/'
	}
}
