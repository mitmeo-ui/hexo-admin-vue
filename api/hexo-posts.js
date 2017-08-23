module.exports = function init(hexo) {
  const Post = hexo.model('Post');

  return {
    all: search => new Promise((resolve) => {
      let posts = Post.toArray();
      if (search) {
        posts = posts.filter(post => post.title.toLowerCase().indexOf(search.toLowerCase()) >= 0);
      }
      // setTimeout(() => resolve(posts), 3000);
      resolve(posts);
    }),
  };
};
