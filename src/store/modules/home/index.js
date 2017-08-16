import * as actions from './actions';
import * as mutations from './mutations';

const state = {
  searchType: 'post',
  searchTerm: '',
  selectedContent: '',
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
