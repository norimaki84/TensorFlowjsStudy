module.exports = {
  productionSourceMap: true,
	pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			title: 'Index Page',
			// chunks: ['chunk-vendors', 'chunk-common', 'index']
		}
	},
	filenameHashing: false,
	devServer: {
		port: 9000,
		// contentBase: './htdocs',
		host: 'localhost',
	},
	//outputDir: './htdocs', // buildした際の出力ディレクトリ
	lintOnSave: false,
	css: {
		loaderOptions: {
      sass: {
      	prependData: '@import "@/assets/style/_import.scss";',
        sourceMap: true
			}
		}
	},
	configureWebpack: {
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: 'fonts/[name].[ext]'
					}
				},
				{
					test: /\.(ogg|mp3|wav|mpeg)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[path][name].[ext]'
							}
						},
					],
				}
			]
		},
		resolve: {
			// alias: {
			//     'vue$': 'vue/dist/vue.esm.js',
			//     '@': path.resolve(__dirname, 'src/'),
			// }
		},
		plugins: [
			// plugin
		]
	}
};