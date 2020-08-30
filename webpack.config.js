const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	],
	resolve: {
		modules: [__dirname, 'src', 'node_modules'],
		extensions: ['*', '.js', '.jsx', '.tsx', '.ts', '.css', '.scss'],
	},
	module: {
		rules: [
			{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: require.resolve('babel-loader')
			},
			{
				test:/\.s?css$/,
				use:[
					'style-loader',
					'css-loader',
					{
						loader: 'resolve-url-loader',
						options: {
							removeCR: true,
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
							sourceMap: true,
              sassOptions: {
                fiber: require('fibers'),
              },
            },
					}
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [{
					loader: 'file-loader'
				}]
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "babel-loader"
					},
					{
						loader: "react-svg-loader",
						options: {
							jsx: true
						}
					}
				]
			}
		]
	}
}
