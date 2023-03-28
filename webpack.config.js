const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',        
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'gus.bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
        template:  './src/pages/libros-populares.html',
        filename: 'libros-populares.html',
        chunks: ['index']
    }), 
    new HtmlWebpackPlugin({
        template:  './src/pages/nuevos-lanzamientos.html',
        filename: 'nuevos-lanzamientos.html',
        chunks: ['index']
    }),
    new HtmlWebpackPlugin({
        template:  './src/index.html',
        filename: 'index.html',
        chunks: ['index']
    }),
    new HtmlWebpackPlugin({
        template:  './src/pages/pagina1/1-0spawn.html',
        filename: 'spawn.html',
        chunks: ['index']
    }),
    new HtmlWebpackPlugin({
        template:  './src/pages/pagina2/2-1lab.html',
        filename: '2-1lab.html',
        chunks: ['index']
    })],
  module: {
    rules: [
      {
        test: /.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};