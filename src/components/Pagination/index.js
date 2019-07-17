import React from "react";

// This is a silly thing to do in client side.
// There should be a proper backend endpoint for pagination
export const Pagination = ({ currentPage, maxPages, goToPage }) => {
  const goToPrevPage = () => {
    goToPage(currentPage - 1);
  };
  const goToNextPage = () => {
    goToPage(currentPage + 1);
  };
  return (
    <>
      <div onClick={goToPrevPage}>Prev</div>
      <div>
        Page {currentPage} of {maxPages}
      </div>
      <div onClick={goToNextPage}>Next</div>
    </>
  );
};
