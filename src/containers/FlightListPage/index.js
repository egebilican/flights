import React from "react";
import { connect } from "react-redux";
import { fetchFlights } from "../../reducers/flights";
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
} from "../../selectors/mainPageSelector";
import Container from "@material-ui/core/Container";

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

    return (
      <Container maxWidth="sm">
        <FlightControls
          setFilterWord={setFilterWord}
          changeSortingMethod={changeSortingMethod}
          changeSortingType={changeSortingType}
          filters={this.props.filters}
        />
        <FlightList flights={this.props.flights} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  flights: orderedListSelector(state),
  filters: filtersSelector(state)
});

export default connect(mapStateToProps)(MainPage);
