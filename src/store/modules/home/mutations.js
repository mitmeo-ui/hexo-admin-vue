export const searchType = (state, type) => {
  state.searchType = type;
};

export const searchTerm = (state, term) => {
  state.searchTerm = term;
};

export const selectContent = (state, id) => {
  state.selectedContent = id;
};
