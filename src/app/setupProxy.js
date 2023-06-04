const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://web-dev.dev.kimo.ai',
      changeOrigin: true,
    })
  );
};
