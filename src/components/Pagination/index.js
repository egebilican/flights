import React from "react";
import Button from "@material-ui/core/Button";

// NOTE: This is a silly thing to do in client side.
// NOTE: There should be a proper backend endpoint for pagination :)
export const Pagination = ({ currentPage, maxPages, goToPage }) => {
  const goToPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };
  const goToNextPage = () => {
    if (currentPage < maxPages) {
      goToPage(currentPage + 1);
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Button onClick={goToPrevPage}>Prev</Button>
      <div>
        Page {currentPage} of {maxPages}
      </div>
      <Button onClick={goToNextPage}>Next</Button>
    </div>
  );
};
