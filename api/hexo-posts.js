module.exports = function init(hexo) {
  const Post = hexo.model('Post');

  return {
    all() {
      return Post.toArray();
    },
  };
};
