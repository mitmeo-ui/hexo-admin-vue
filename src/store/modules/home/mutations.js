import {
  SEARCH_TYPE,
  SEARCH_TERM,
  SELECT_CONTENT,
} from '@/store/types';

export default {
  [SEARCH_TYPE](state, type) {
    state.searchType = type;
    state.searchTerm = null;
  },
  [SEARCH_TERM](state, term) {
    state.searchTerm = term;
  },
  [SELECT_CONTENT](state, id) {
    state.selectedContent = id;
  },
};

