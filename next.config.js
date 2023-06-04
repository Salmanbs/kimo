const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  images: {
    domains: ["storage.googleapis.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://web-dev.dev.kimo.ai/v1/:path*",
      },
    ];
  },
  async middleware() {
    const proxyMiddleware = createProxyMiddleware("/api", {
      target: "https://web-dev.dev.kimo.ai",
      changeOrigin: true,
    });

    return [proxyMiddleware];
  },
};
