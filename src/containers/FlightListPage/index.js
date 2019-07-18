import React from "react";
import { connect } from "react-redux";
import { fetchFlights, goToPage, clearFlights } from "../../reducers/flights";
import {
  toggleSortingMethod,
  toggleSortingType,
  setFilterWords
} from "../../reducers/filters";
import { FlightList, FlightControls } from "../../components";
import {
  orderedListSelector,
  filtersSelector,
  currentPageNumberSelector,
  maxPageNumberSelector
} from "../../selectors/flightListPageSelector";
import { Pagination } from "../../components/Pagination";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.clearFlights();
    this.props.fetchFlights();
  }

  render() {
    const { filters, flights, currentPage, maxPageNumber } = this.props;
    const handleSetFilterWords = filterWordsObject => {
      this.props.setFilterWords(filterWordsObject);
    };

    const changeSortingType = () => {
      this.props.toggleSortingType();
    };
    const changeSortingMethod = () => {
      this.props.toggleSortingMethod();
    };
    const handlePageClick = pageNr => {
      this.props.goToPage(pageNr);
    };
    return (
      <>
        <FlightControls
          setFilterWords={handleSetFilterWords}
          changeSortingMethod={changeSortingMethod}
          changeSortingType={changeSortingType}
          filters={filters}
        />
        <FlightList flights={flights} />
        {flights && flights.length > 0 && (
          <Pagination
            currentPage={currentPage}
            maxPages={maxPageNumber}
            goToPage={handlePageClick}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  flights: orderedListSelector(state),
  filters: filtersSelector(state),
  currentPage: currentPageNumberSelector(state),
  maxPageNumber: maxPageNumberSelector(state)
});

const mapDispatchToProps = dispatch => ({
  toggleSortingMethod: () => dispatch(toggleSortingMethod()),
  toggleSortingType: () => dispatch(toggleSortingType()),
  fetchFlights: () => dispatch(fetchFlights()),
  clearFlights: () => dispatch(clearFlights()),
  goToPage: pageNr => dispatch(goToPage(pageNr)),
  setFilterWords: filterWordsObject =>
    dispatch(setFilterWords(filterWordsObject))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
