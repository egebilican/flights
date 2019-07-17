import React from "react";
import { connect } from "react-redux";
import { fetchFlights, goToPage } from "../../reducers/flights";
import {
  setArrivalFilter,
  setDepartureFilter,
  toggleSortingMethod,
  toggleSortingType
} from "../../reducers/filters";
import { FlightList, FlightControls } from "../../components";
import {
  orderedListSelector,
  filtersSelector
} from "../../selectors/flightListPageSelector";
import Container from "@material-ui/core/Container";
import { Pagination } from "../../components/Pagination";

class MainPage extends React.Component {
  fetchFlightData(searchTerm) {
    this.props.dispatch(fetchFlights(searchTerm));
  }

  componentDidMount() {
    this.fetchFlightData();
  }

  render() {
    const setFilterWord = (filterWord, type) => {
      if (type === "arrival") {
        this.props.dispatch(setArrivalFilter(filterWord));
      } else {
        this.props.dispatch(setDepartureFilter(filterWord));
      }
    };
    const changeSortingType = () => {
      this.props.dispatch(toggleSortingType());
    };
    const changeSortingMethod = () => {
      this.props.dispatch(toggleSortingMethod());
    };
    const handlePageClick = pageNr => {
      this.props.dispatch(goToPage(pageNr));
    };
    return (
      <Container maxWidth="sm">
        <FlightControls
          setFilterWord={setFilterWord}
          changeSortingMethod={changeSortingMethod}
          changeSortingType={changeSortingType}
          filters={this.props.filters}
        />
        <FlightList flights={this.props.flights} />
        <Pagination currentPage={1} maxPages={2} goToPage={handlePageClick} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  flights: orderedListSelector(state),
  filters: filtersSelector(state)
});

export default connect(mapStateToProps)(MainPage);
