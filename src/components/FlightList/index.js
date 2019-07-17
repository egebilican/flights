import React from "react";

export const FlightList = ({ flights = [] }) => {
  const renderFlight = (flight, index) => {
    return (
      <div
        key={`${flight.departure}-${flight.arrival}-${flight.departureTime}-${
          flight.type
        }-${index}`}
      >
        {index}
        Arrival : {flight.arrival}
        Departure : {flight.departure}
        Type: {flight.type}
        Departure Time: {flight.departureTime}
      </div>
    );
  };
  return (
    <div>{flights.map((flight, index) => renderFlight(flight, index))}</div>
  );
};
