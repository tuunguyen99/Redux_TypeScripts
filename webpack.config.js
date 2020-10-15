const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: "./src/index.tsx",
        // admin: "./src/components/admin/ad.tsx"
    },
    target: "web",
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),

    },
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.min.css'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            chunks: ['vendor', 'app'],
            filename: './index.html' //relative to root of the application
        }),
        // new HtmlWebpackPlugin({
        //     hash: true,
        //     title: 'My Awesome admin',
        //     myPageHeader: 'Settings',
        //     template: './src/components/admin/admin.html',
        //     chunks: ['vendor', 'admin'],
        //     filename: './admin.html'
        // }),
        new MiniCssExtractPlugin({
            filename: "./src/yourfile.css",
        }),
    ],
    devtool: 'inline-source-map'
};