module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/master-cat-fe/" : "/",
  devServer: {
    disableHostCheck: true,
  },
};
