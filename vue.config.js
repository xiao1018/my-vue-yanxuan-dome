module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'https://m.you.163.com',
        changeOrigin: true
      }
    }
  }
}