import axios from 'axios';

const errorHandler = (err) => {
  console.error(err);
};

const get = url => axios.get(url).catch(errorHandler);
const post = (url, payload) => axios.post(url, payload).catch(errorHandler);
const put = (url, payload) => axios.put(url, payload).catch(errorHandler);

export default {
  install(Vue) {
    Vue.prototype.$http = {
      get,
      post,
      put,
    };
  },
};
