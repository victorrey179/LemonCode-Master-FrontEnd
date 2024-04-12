import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";

import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  context: path.resolve(__dirname, "src"),
  resolve: {
    extensions: [".js", ".ts"],
  },
  entry: {
    app: "./index.ts",
  },

  output: {
    filename: "[name].[chunkhash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      scriptLoading: "blocking",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "content",
          to: "content",
        },
      ],
    }),
  ],
};
