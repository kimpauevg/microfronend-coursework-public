const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin =require("eslint-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 10100,
        historyApiFallback: true,
    },
    output: {
        publicPath: "http://v2446558.hosted-by-vdsina.ru:11100/",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": "defaults"
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }]
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 0
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js"],
    },
    plugins: [
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),
        new ModuleFederationPlugin({
            name: "main",
            remotes: {
                display: "display@http://v2446558.hosted-by-vdsina.ru:11101/remoteEntry.js",
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            chunkFilename: '[id].css'
        }),
    ],
};
