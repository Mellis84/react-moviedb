const path = require('path');

module.exports = {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},
		{
			test: /\.s?css$/,
			use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
		},
		{
			test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
			loader: require.resolve('url-loader'),
			options: {
				limit: 10000,
				name: 'static/media/[name].[hash:8].[ext]',
			},
		}],
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'public'),
	},
};
