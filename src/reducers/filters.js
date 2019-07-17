export const FILTER_ACTIONS = {
  SET_ARRIVAL_FILTER: "SET_ARRIVAL_FILTER",
  SET_DEPARTURE_FILTER: "SET_DEPARTURE_FILTER",
  TOGGLE_SORTING_METHOD: "TOGGLE_SORTING_METHOD",
  TOGGLE_SORTING_TYPE: "TOGGLE_SORTING_TYPE"
};

export const setArrivalFilter = filterWord => ({
  type: FILTER_ACTIONS.SET_ARRIVAL_FILTER,
  filterWord
});

export const setDepartureFilter = filterWord => ({
  type: FILTER_ACTIONS.SET_DEPARTURE_FILTER,
  filterWord
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
  arrivalFilterWord: "",
  departureFilterWord: "",
  sortingType: SORTING_TYPES.ASC,
  sortingMethod: SORTING_METHODS.DEPARTURE
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_ACTIONS.SET_ARRIVAL_FILTER:
      return {
        ...state,
        arrivalFilterWord: action.filterWord.toLowerCase()
      };
    case FILTER_ACTIONS.SET_DEPARTURE_FILTER:
      return {
        ...state,
        departureFilterWord: action.filterWord.toLowerCase()
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
