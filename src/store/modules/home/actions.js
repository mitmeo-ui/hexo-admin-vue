import {
  SEARCH_TYPE,
  SEARCH_TERM,
  SELECT_CONTENT,
} from '@/store/types';

export default {
  setSearchType({ commit }, type) {
    commit(SEARCH_TYPE, type);
    commit(SELECT_CONTENT, null);
  },
  setSearchTerm({ commit }, term) {
    commit(SEARCH_TERM, term);
    commit(SELECT_CONTENT, null);
  },
  setSelectedContent({ commit }, id) {
    commit(SELECT_CONTENT, id);
  },
};

