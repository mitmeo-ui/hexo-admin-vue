const serveStatic = require('serve-static');
const path = require('path');
const proxy = require('http-proxy-middleware');

hexo.extend.filter.register('server_middleware', (app) => {
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
  // app.use(`${hexo.config.root}admin/api/`, bodyParser.json({ limit: '50mb' }));
});
