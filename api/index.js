const connectRoute = require('connect-route');
const HexoPosts = require('./hexo-posts');

function json(obj) {
  return JSON.stringify(obj);
}

const api = (router, hexo) => {
  const posts = HexoPosts(hexo);

  router.get('/post/list/:search', (req, res) => {
    posts.all(req.params.search).then((data) => {
      res.end(json(data));
    });
  });

  router.get('/post/list', (req, res) => {
    posts.all().then((data) => {
      res.end(json(data));
    });
  });
};

module.exports = function create(app, hexo) {
  return connectRoute((router) => { api(router, hexo); });
};
