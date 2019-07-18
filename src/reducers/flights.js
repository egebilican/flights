export const FLIGHTS_ACTIONS = {
  SET_BUSINESS_FLIGHTS: "SET_BUSINESS_FLIGHTS",
  SET_CHEAP_FLIGHTS: "SET_CHEAP_FLIGHTS",
  FETCH_FLIGHTS: "FETCH_FLIGHTS",
  CLEAR_FLIGHTS: "CLEAR_FLIGHTS",
  FETCH_FAILED: "FETCH_FAILED",
  GO_TO_PAGE: "GO_TO_PAGE"
};

export const FLIGHTS_PER_PAGE = 5;

export const fetchFlights = searchTerm => ({
  type: FLIGHTS_ACTIONS.FETCH_FLIGHTS,
  searchTerm
});

export const clearFlights = searchTerm => ({
  type: FLIGHTS_ACTIONS.CLEAR_FLIGHTS,
  searchTerm
});

export const goToPage = pageNr => ({
  type: FLIGHTS_ACTIONS.GO_TO_PAGE,
  pageNr
});

const formatBusinessFlights = flights => {
  const convertedFlights = flights.map(flight => ({
    ...flight,
    type: "Business"
  }));
  return convertedFlights;
};

const formatCheapFlights = flights => {
  const convertedFlights = flights.map(flight => {
    const destinations = flight.route.split("-");
    return {
      departure: destinations[0],
      arrival: destinations[1],
      arrivalTime: flight.arrival,
      departureTime: flight.departure,
      type: "Cheap"
    };
  });
  return convertedFlights;
};

const INITIAL_STATE = {
  availableFlights: [],
  currentPageNumber: 1,
  maxPageNumber: 1
};

const flights = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FLIGHTS_ACTIONS.CLEAR_FLIGHTS:
      return { ...state, availableFlights: [] };
    case FLIGHTS_ACTIONS.SET_BUSINESS_FLIGHTS:
      if (action && action.flights && action.flights.data) {
        const newAvailableFlights = [
          ...state.availableFlights,
          ...formatBusinessFlights(action.flights.data)
        ];
        const newMaxPageNr = Math.ceil(
          newAvailableFlights.length / FLIGHTS_PER_PAGE
        );
        const newState = {
          ...state,
          availableFlights: newAvailableFlights,
          maxPageNumber: newMaxPageNr
        };
        return newState;
      } else return state;
    case FLIGHTS_ACTIONS.SET_CHEAP_FLIGHTS:
      if (action && action.flights && action.flights.data) {
        const newAvailableFlights = [
          ...state.availableFlights,
          ...formatCheapFlights(action.flights.data)
        ];
        const newMaxPageNr = Math.ceil(
          newAvailableFlights.length / FLIGHTS_PER_PAGE
        );
        const newState = {
          ...state,
          availableFlights: newAvailableFlights,
          maxPageNumber: newMaxPageNr
        };
        return newState;
      } else return state;
    case FLIGHTS_ACTIONS.GO_TO_PAGE:
      return { ...state, currentPageNumber: action.pageNr };
    default:
      return state;
  }
};

export default flights;
