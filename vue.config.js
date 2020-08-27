module.exports = {
  publicPath: "/MEVN_Stack/",
  transpileDependencies: ["vuetify"],
  // devServer Options don't belong into `configureWebpack`
  devServer: {
    proxy: 'http://localhost:9004'
  },
};
