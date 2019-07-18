import React from "react";
import { InputBar } from "..";
import Button from "@material-ui/core/Button";

export const FlightControls = ({
  setFilterWords,
  changeSortingMethod,
  changeSortingType,
  filters
}) => {
  const [searchTerms, setSearchTerms] = React.useState({
    arrival: "",
    departure: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    setFilterWords(searchTerms);
  };

  const handleChange = type => event => {
    setSearchTerms({ ...searchTerms, [type]: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputBar
          id="arrival-input"
          label="Arrival location?"
          type="arrival"
          handleChange={handleChange("arrival")}
          value={searchTerms.arrival}
          placeholder="City"
        />
        <InputBar
          id="departure-input"
          label="Departure location?"
          handleChange={handleChange("departure")}
          value={searchTerms.departure}
          type="departure"
          placeholder="City"
        />
        <input type="submit" value="Submit" style={{ visibility: "hidden" }} />
      </form>

      <Button onClick={changeSortingMethod}>
        Sorting Method : {filters.sortingMethod}
      </Button>
      <Button onClick={changeSortingType}>
        Sorting Type : {filters.sortingType}
      </Button>
    </>
  );
};
