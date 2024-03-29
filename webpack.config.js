module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    library: 'MODLInterpreter',
    libraryTarget: 'umd'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      }
    ]
  }
};