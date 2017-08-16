export const setSearchType = ({ commit }, type) => {
  commit('searchType', type);
  commit('selectContent', '');
};

export const setSearchTerm = ({ commit }, term) => {
  commit('searchTerm', term);
  commit('selectContent', '');
};

export const setSelectedContent = ({ commit }, id) => {
  commit('selectContent', id);
};
