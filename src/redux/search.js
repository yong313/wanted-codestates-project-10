const SEARCH_DISEASE = "search/SEARCH_DISEASE";

const initialState = {
  searchList: "",
};

export const searchWord = (List) => ({ type: SEARCH_DISEASE, List });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_DISEASE:
      return {
        ...state,
        searchList: action.List,
      };
    default:
      return state;
  }
}
