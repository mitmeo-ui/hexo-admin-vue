const connectRoute = require('connect-route');
const HexoPosts = require('./hexo-posts');

function json(obj) {
  return JSON.stringify(obj);
}

const api = (router, hexo) => {
  const posts = HexoPosts(hexo);

  router.get('/posts', (req, res) => {
    res.end(json(posts.all()));
  });
};

module.exports = function create(app, hexo) {
  return connectRoute((router) => { api(router, hexo); });
};
