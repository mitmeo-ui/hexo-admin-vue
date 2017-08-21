const serveStatic = require('serve-static');
const path = require('path');
const proxy = require('http-proxy-middleware');
const api = require('./api');

hexo.extend.filter.register('server_middleware', (app) => {
  app.use('/admin/api', api(app, hexo));

  if (hexo.config.admin && hexo.config.admin.dev) {
    // proxy middleware options
    const options = {
      target: 'http://localhost:8080', // target host
    };
    const adminProxy = proxy(options);
    // Main routes
    app.use('/admin', adminProxy);
  } else {
    app.use('/admin', serveStatic(path.join(__dirname, 'dist')));
  }
});
