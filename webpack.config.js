/**
 * Adding Linaria
 * @see
 * https://github.com/callstack/linaria#installation
 */

const HtmlWebPackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    // devServer: {
    //   hot: true
    // },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(ts|tsx|js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' },
                    // Linaria setup
                    {
                        loader: '@linaria/webpack-loader',
                        options: {
                            sourceMap: process.env.NODE_ENV !== 'production'
                        }
                    }
                ]
            },
            // Linaria
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: process.env.NODE_ENV !== 'production'
                        }
                    }
                ]
            },
            // Loading SVGs using @svgr/webpack
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            }
        ]
    },
    plugins: [
        htmlPlugin,
        new TsconfigPathsPlugin(),
        // Linaria
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],
    resolve: {
        alias: {
            '@/': path.resolve(__dirname, 'src'),
            '@/components': path.resolve(__dirname, 'src/components'),
            '@/fonts': path.resolve(__dirname, 'src/fonts'),
            '@/hooks': path.resolve(__dirname, 'src/components')
        },
        extensions: ['.js', 'jsx', '.ts', '.tsx']
    }
};
