const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
	mode: 'development',
	entry: './javascript/index.js',

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "index.template.html"),
		}),
		new MiniCssExtractPlugin(),
	],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'javascript')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				}
			},
			{
				test: /\.scss$/,
				loaders: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === 'development',
						},
					},
					'css-loader',
					{
						loader: 'sass-loader',
					},
				]
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devtool: 'inline-source-map',

	devServer: {
		historyApiFallback: true,
	},
};
