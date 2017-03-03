var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8001";

var loaders = [
    {
        loader: 'css-loader',
        options: {
            modules: true
        }
    }, {
        loader: 'sass-loader'
    }
]

module.exports = {

    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/",

    },

    module: {

        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules|bower_components|public\/)/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"]
                },
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: loaders,
                })
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: "file-loader"
            }, {
                test: /\.(woff|woff2)$/,
                use: "url-loader?prefix=font/&limit=5000"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=image/svg+xml"
            }, {
                test: /\.gif/,
                use: "url-loader?limit=10000&mimetype=image/gif"
            }, {
                test: /\.jpg/,
                use: "url-loader?limit=10000&mimetype=image/jpg"
            }, {
                test: /\.png/,
                exclude: /(node_modules|bower_components)/,
                use: "url-loader?limit=10000&mimetype=image/png"
            }

        ],
    },

    resolve: {
        modules: [
            "node_modules", path.resolve(__dirname, "app")
        ],
        extensions: [
            '.js', '.json', '.jsx', '.css', '.scss'
        ],
        enforceExtension: false
    },

 
    devtool: "source-map", 
    context: __dirname,
    target: "web",
    stats: "errors-only",
    devServer: {
        contentBase: "./public",
        noInfo: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'app.css',
            allChunks: true
        }),
        new DashboardPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            files: {
                css: ['app.css'],
                js: ["bundle.js"]
            }
        })
    ],
}
