export const FILTER_ACTIONS = {
  SET_FILTER_WORDS: "SET_FILTER_WORDS",

  TOGGLE_SORTING_METHOD: "TOGGLE_SORTING_METHOD",
  TOGGLE_SORTING_TYPE: "TOGGLE_SORTING_TYPE"
};

export const setFilterWords = filterWordsObject => ({
  type: FILTER_ACTIONS.SET_FILTER_WORDS,
  filterWordsObject
});

export const toggleSortingMethod = () => ({
  type: FILTER_ACTIONS.TOGGLE_SORTING_METHOD
});

export const toggleSortingType = () => ({
  type: FILTER_ACTIONS.TOGGLE_SORTING_TYPE
});

export const SORTING_TYPES = {
  ASC: "ASCENDING",
  DSC: "DESCENDING"
};
export const SORTING_METHODS = {
  DEPARTURE: "DEPARTURE",
  ARRIVAL: "ARRIVAL"
};

const INITIAL_STATE = {
  filterWords: { arrival: "", departure: "" },
  sortingType: SORTING_TYPES.ASC,
  sortingMethod: SORTING_METHODS.DEPARTURE
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_ACTIONS.SET_FILTER_WORDS:
      return {
        ...state,
        filterWords: action.filterWordsObject
      };

    case FILTER_ACTIONS.TOGGLE_SORTING_METHOD:
      return {
        ...state,
        sortingMethod:
          state.sortingMethod === SORTING_METHODS.DEPARTURE
            ? SORTING_METHODS.ARRIVAL
            : SORTING_METHODS.DEPARTURE
      };
    case FILTER_ACTIONS.TOGGLE_SORTING_TYPE:
      return {
        ...state,
        sortingType:
          state.sortingType === SORTING_TYPES.ASC
            ? SORTING_TYPES.DSC
            : SORTING_TYPES.ASC
      };
    default:
      return state;
  }
};

export default filters;
