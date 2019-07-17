export const FLIGHTS_ACTIONS = {
  SET_BUSINESS_FLIGHTS: "SET_BUSINESS_FLIGHTS",
  SET_CHEAP_FLIGHTS: "SET_CHEAP_FLIGHTS",
  FETCH_FLIGHTS: "FETCH_FLIGHTS",
  FETCH_FAILED: "FETCH_FAILED",
  SET_ARRIVAL_FILTER: "SET_ARRIVAL_FILTER",
  SET_DEPARTURE_FILTER: "SET_DEPARTURE_FILTER"
};

export const fetchFlights = searchTerm => ({
  type: FLIGHTS_ACTIONS.FETCH_FLIGHTS,
  searchTerm
});

const formatBusinessFlights = flights => {
  const convertedFlights = flights.map(flight => ({
    ...flight,
    type: "business"
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
      type: "cheap"
    };
  });
  return convertedFlights;
};

const INITIAL_STATE = {
  availableFlights: []
};

const flights = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FLIGHTS_ACTIONS.SET_BUSINESS_FLIGHTS:
      if (action && action.flights && action.flights.data) {
        const newState = {
          ...state,
          availableFlights: [
            ...state.availableFlights,
            ...formatBusinessFlights(action.flights.data)
          ]
        };
        return newState;
      } else return state;
    case FLIGHTS_ACTIONS.SET_CHEAP_FLIGHTS:
      if (action && action.flights && action.flights.data) {
        const newState = {
          ...state,
          availableFlights: [
            ...state.availableFlights,
            ...formatCheapFlights(action.flights.data)
          ]
        };
        return newState;
      } else return state;
    default:
      return state;
  }
};

export default flights;
