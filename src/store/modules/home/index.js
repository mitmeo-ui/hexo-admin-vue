import actions from './actions';
import mutations from './mutations';

const state = {
  searchType: 'post',
  searchTerm: '',
  selectedContent: '',
  contentLoading: false,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
