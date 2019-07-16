import { createSelector } from "reselect";

const arrivalFilterWordSelector = state => state.filters.arrivalFilterWord;
const departureFilterWordSelector = state => state.filters.departureFilterWord;
const availableFlightsSelector = state => state.flights.availableFlights;

export const filteredSelector = createSelector(
  arrivalFilterWordSelector,
  departureFilterWordSelector,
  availableFlightsSelector,
  (arrivalFilter, departureFilter, availableFlights) => {
    console.log(
      "hey",
      "arrival",
      arrivalFilter,
      "dep",
      departureFilter,
      "av",
      availableFlights
    );
    return availableFlights
      .filter(item => {
        console.log("item", item);
        return item.arrival.toLowerCase().indexOf(arrivalFilter) > -1;
      })
      .filter(
        item => item.departure.toLowerCase().indexOf(departureFilter) > -1
      );
  }
);
