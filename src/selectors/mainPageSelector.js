import { createSelector } from "reselect";
import { SORTING_METHODS, SORTING_TYPES } from "../reducers/filters";

export const filtersSelector = state => state.filters;
const arrivalFilterWordSelector = state => state.filters.arrivalFilterWord;
const departureFilterWordSelector = state => state.filters.departureFilterWord;
const availableFlightsSelector = state => state.flights.availableFlights;
const sortingTypeSelector = state => state.filters.sortingType;
const sortingMethodSelector = state => state.filters.sortingMethod;

export const orderedListSelector = createSelector(
  arrivalFilterWordSelector,
  departureFilterWordSelector,
  availableFlightsSelector,
  sortingTypeSelector,
  sortingMethodSelector,
  (
    arrivalFilter,
    departureFilter,
    availableFlights,
    sortingType,
    sortingMethod
  ) => {
    console.log(
      "hey",
      "arrival",
      arrivalFilter,
      "dep",
      departureFilter,
      "av",
      availableFlights
    );
    const filteredFlights = availableFlights
      .filter(item => {
        console.log("item", item);
        return item.arrival.toLowerCase().indexOf(arrivalFilter) > -1;
      })
      .filter(
        item => item.departure.toLowerCase().indexOf(departureFilter) > -1
      );
    let sortedFlights = filteredFlights;
    if (sortingMethod === SORTING_METHODS.DEPARTURE) {
      if (sortingType === SORTING_TYPES.ASC) {
        sortedFlights = filteredFlights.sort(
          (x, y) => x.departureTime - y.departureTime
        );
      } else {
        sortedFlights = filteredFlights.sort(
          (x, y) => y.departureTime - x.departureTime
        );
      }
    } else {
      if (sortingType === SORTING_TYPES.ASC) {
        sortedFlights = filteredFlights.sort(
          (x, y) => x.arrivalTime - y.arrivalTime
        );
      } else {
        sortedFlights = filteredFlights.sort(
          (x, y) => y.arrivalTime - x.arrivalTime
        );
      }
    }
    return sortedFlights;
  }
);
