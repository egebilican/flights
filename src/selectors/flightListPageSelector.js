import { createSelector } from "reselect";
import { SORTING_METHODS, SORTING_TYPES } from "../reducers/filters";
import { FLIGHTS_PER_PAGE } from "../reducers/flights";

export const filtersSelector = state => state.filters;
export const currentPageNumberSelector = state =>
  state.flights.currentPageNumber;
export const maxPageNumberSelector = state => state.flights.maxPageNumber;
const arrivalFilterWordSelector = state => state.filters.filterWords.arrival;
const departureFilterWordSelector = state =>
  state.filters.filterWords.departure;
const availableFlightsSelector = state => state.flights.availableFlights;

const sortingTypeSelector = state => state.filters.sortingType;
const sortingMethodSelector = state => state.filters.sortingMethod;

export const orderedListSelector = createSelector(
  arrivalFilterWordSelector,
  departureFilterWordSelector,
  availableFlightsSelector,
  sortingTypeSelector,
  sortingMethodSelector,
  currentPageNumberSelector,
  (
    arrivalFilter,
    departureFilter,
    availableFlights,
    sortingType,
    sortingMethod,
    currentPage
  ) => {
    const filteredFlights = availableFlights
      .filter(item => {
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

    const paginatedFlights = sortedFlights.slice(
      FLIGHTS_PER_PAGE * (currentPage - 1),
      FLIGHTS_PER_PAGE * currentPage
    );
    return paginatedFlights;
  }
);
