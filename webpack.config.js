path = require('path')

module.exports = {
    mode: "production",
    entry: "./src/Interpreter.ts",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    target: "node",
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            {test: /\.tsx?$/, use: ["ts-loader"], exclude: [/node_modules/, /test/]}
        ]
    }
}
