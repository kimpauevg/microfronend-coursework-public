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
            directory: path.join(__dirname, "/"),
        },
        port: 10101,
        historyApiFallback: true,
    },
    output: {
        publicPath: "http://display-csi.localhost/",
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
            extensions: ["js"],
        }),
        new ModuleFederationPlugin({
            name: "display",
            library: { type: "var", name: "display" },
            filename: "remoteEntry.js",
            exposes: {
                "./Display": "./src/Display",
            },
            shared: ["react", "react-dom"],
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
