import React from "react";
import { InputBar } from "../../components";
import Button from "@material-ui/core/Button";

export const FlightControls = ({
  setFilterWord,
  changeSortingMethod,
  changeSortingType,
  filters
}) => {
  return (
    <>
      <InputBar
        id="arrival-input"
        label="Arrival location?"
        handleSubmit={setFilterWord}
        type="arrival"
        placeholder="City"
      />
      <InputBar
        id="departure-input"
        label="Departure location?"
        handleSubmit={setFilterWord}
        type="departure"
        placeholder="City"
      />
      <Button onClick={changeSortingMethod}>
        Sorting Method : {filters.sortingMethod}
      </Button>
      <Button onClick={changeSortingType}>
        Sorting Type : {filters.sortingType}
      </Button>
    </>
  );
};
