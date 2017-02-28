var webpack = require('webpack');
// var IS_DEV = require('isdev')
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
    // click on the name of the option to get to the detailed documentation click on
    // the items with arrows to show more examples / advanced options

    entry: {
        app: "./src/index.js"
    }, // string | object | array
    // Here the application starts executing and webpack starts bundling

    output: {
        // options related to how webpack emits results

        path: path.join(__dirname, "public"), // string
        // the target directory for all output files must be an absolute path (use the
        // Node.js path module)

        filename: "bundle.js", // string
        // the filename template for entry chunks

        publicPath: "/", // string
        // the url to the output directory resolved relative to the HTML page

    },

    module: {
        // configuration regarding modules

        rules: [
            // rules for modules (configure loaders, parser options, etc.)

            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules|bower_components|public\/)/,
                // these are matching conditions, each accepting a regular expression or string
                // test and include have the same behavior, both must be matched exclude must
                // not be matched (takes preferrence over test and include) Best practices:
                // - Use RegExp only in test and for filename matching
                // - Use arrays of absolute paths in include and exclude
                // - Try to avoid exclude and prefer include

                loader: "babel-loader",
                // the loader which should be applied, it'll be resolved relative to the context
                // -loader suffix is no longer optional in webpack2 for clarity reasons see
                // webpack 1 upgrade guide

                options: {
                    presets: ["es2015", "react"]
                },
                // options for the loader
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: loaders,
                })
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                use: "file-loader"
            }, {
                test: /\.(woff|woff2)$/,
                exclude: /(node_modules|bower_components)/,
                use: "url-loader?prefix=font/&limit=5000"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                use: "url-loader?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                use: "url-loader?limit=10000&mimetype=image/svg+xml"
            }, {
                test: /\.gif/,
                exclude: /(node_modules|bower_components)/,
                use: "url-loader?limit=10000&mimetype=image/gif"
            }, {
                test: /\.jpg/,
                exclude: /(node_modules|bower_components)/,
                use: "url-loader?limit=10000&mimetype=image/jpg"
            }, {
                test: /\.png/,
                exclude: /(node_modules|bower_components)/,
                use: "url-loader?limit=10000&mimetype=image/png"
            }

        ],

        /* Advanced module configuration (click to show) */
    },

    resolve: {
        // options for resolving module requests (does not apply to resolving to
        // loaders)

        modules: [
            "node_modules", path.resolve(__dirname, "app")
        ],
        // directories where to look for modules

        //sino funciona debe agregar al array de extensions un item '*'
        extensions: [
            '.js', '.json', '.jsx', '.css', '.scss'
        ],
        enforceExtension: false
        // extensions that are used
    },

    // performance: {     hints: "warning", // enum     maxAssetSize: 200000, // int
    // (in bytes),     maxEntrypointSize: 400000, // int (in bytes)     assetFilter:
    // function (assetFilename) {         // Function predicate that provides asset
    // filenames         return assetFilename.endsWith('.css') ||
    // assetFilename.endsWith('.js');     } },

    devtool: "source-map", // enum
    // enhance debugging by adding meta info for the browser devtools source-map
    // most detailed at the expense of build speed.

    context: __dirname, // string (absolute path!)
    // the home directory for webpack the entry and module.rules.loader option   is
    // resolved relative to this directory

    target: "web", // enum
    // the environment in which the bundle should run changes chunk loading behavior
    // and available modules

    // externals: [
    //     "react", /^@angular\//
    // ],
    // Don't follow/bundle these modules, but request them at runtime from the
    // environment

    stats: "errors-only",
    // lets you precisely control what bundle information gets displayed

    devServer: {
        contentBase: "./public",
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
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
    // list of additional plugins

    /* Advanced configuration (click to show) */
}
