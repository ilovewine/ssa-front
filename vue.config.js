const merge = require('babel-merge')
const path = require('path')

module.exports = {
	css: {
		sourceMap: true,
	},

	chainWebpack: config => {
		config.module.rule('vue').
			use('vue-loader').
			loader('vue-loader').
			tap(options => {
				merge(options, {
					transformToRequire: {
						'img': 'src',
						'image': 'xlink:href',
						'b-img': 'src',
						'b-img-lazy': ['src', 'blank-src'],
						'b-card': 'img-src',
						'b-card-img': 'img-src',
						'b-carousel-slide': 'img-src',
						'b-embed': 'src',
					},
				})
			})
	},

	publicPath: undefined,
	outputDir: undefined,
	assetsDir: undefined,
	runtimeCompiler: true,
	productionSourceMap: undefined,
	parallel: undefined,

	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: [
				path.resolve(__dirname, './src/assets/sass/all.scss'),
				path.resolve(__dirname, './node_modules/bootstrap/scss/bootstrap.scss'),
			],
		},
	},
}
