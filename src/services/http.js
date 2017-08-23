import axios from 'axios';
import { Message } from 'element-ui';

const handleError = (err) => {
  let message;
  if (err.response) {
    message = `${err.response.status} ${err.response.statusText}: `;
  }
  message += ` ${err.message || err}`;

  Message({
    message,
    type: 'error',
    showClose: true,
  });

  return Promise.reject(err);
};

axios.interceptors.response.use(response => response, error => Promise.reject(error));

const get = url => axios.get(url).catch(handleError);
const post = (url, payload) => axios.post(url, payload).catch(handleError);
const put = (url, payload) => axios.put(url, payload).catch(handleError);

export default {
  install(Vue) {
    Vue.prototype.$http = {
      get,
      post,
      put,
    };
  },
};
