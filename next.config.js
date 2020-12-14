const path = require('path')

module.exports = {
    rules: [
        {
            test: /\.less$/,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            modifyVars: {
                                'primary-color': '#ff6a02',
                            },
                            javascriptEnabled: true,
                        },
                    },
                }
            ]
        }
    ],
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader',
        });
        return config;
    },
    webpackDevMiddleware: (config) => config,
};
