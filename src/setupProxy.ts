//@ts-ignore
const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app: any) {
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: 'https://localhost:8080/',
      changeOrigin: true,
      pathRewrite: {
        "^/proxy": ""
      }
    })
  );
};