const nextTranslate = require('next-translate');

module.exports = nextTranslate({
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        return config;
    },
    reactStrictMode: true,
});