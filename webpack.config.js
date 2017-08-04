const path = require("path");

module.exports = {
    entry: {
        index: ["./src/test.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    devServer: {
        port: '8877'
    }
};

if (process.env.NODE_ENV !== 'production') {
    module.exports.devtool = 'inline-source-map';
}
