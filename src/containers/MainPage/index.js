import React from "react";
import { connect } from "react-redux";
import { fetchFlights } from "../../reducers/flights";
import { setArrivalFilter, setDepartureFilter } from "../../reducers/filters";
import { InputBar, FlightList } from "../../components";
import { filteredSelector } from "../../selectors/mainPageSelector";

class MainPage extends React.Component {
  fetchFlightData(searchTerm) {
    console.log("submit data");
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
        <FlightList flights={this.props.flights} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  flights: filteredSelector(state)
});

export default connect(mapStateToProps)(MainPage);
