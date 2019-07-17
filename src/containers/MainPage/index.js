import React from "react";
import { connect } from "react-redux";
import { fetchFlights } from "../../reducers/flights";
import {
  setArrivalFilter,
  setDepartureFilter,
  toggleSortingMethod,
  toggleSortingType
} from "../../reducers/filters";
import { InputBar, FlightList } from "../../components";
import {
  orderedListSelector,
  filtersSelector
} from "../../selectors/mainPageSelector";

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
      <div>
        <InputBar
          handleSubmit={setFilterWord}
          type="arrival"
          placeholder="Arrival?"
        />
        <InputBar
          handleSubmit={setFilterWord}
          type="departure"
          placeholder="Departure?"
        />
        <div onClick={changeSortingMethod}>
          Sorting Method : {this.props.filters.sortingMethod}
        </div>
        <div onClick={changeSortingType}>
          Sorting Type : {this.props.filters.sortingType}
        </div>
        <FlightList flights={this.props.flights} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  flights: orderedListSelector(state),
  filters: filtersSelector(state)
});

export default connect(mapStateToProps)(MainPage);
