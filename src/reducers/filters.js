export const FILTER_ACTIONS = {
  SET_ARRIVAL_FILTER: "SET_ARRIVAL_FILTER",
  SET_DEPARTURE_FILTER: "SET_DEPARTURE_FILTER"
};

export const setArrivalFilter = filterWord => ({
  type: FILTER_ACTIONS.SET_ARRIVAL_FILTER,
  filterWord
});

export const setDepartureFilter = filterWord => ({
  type: FILTER_ACTIONS.SET_DEPARTURE_FILTER,
  filterWord
});

const INITIAL_STATE = {
  arrivalFilterWord: "",
  departureFilterWord: ""
};

const filters = (state = INITIAL_STATE, action) => {
  console.log("ACTION", action);
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
    default:
      return state;
  }
};

export default filters;
