import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
import { getThemeProps } from "../../../node_modules/@material-ui/styles";
import MoneyIcon from "@material-ui/icons/AttachMoney";
import RemoveIcon from "@material-ui/icons/Remove";
import { convertMsToDate } from "../../utils";

export const FlightList = ({ flights = [] }) => {
  const useStyles = makeStyles(theme => {
    return {
      business: {
        color: theme.palette.primary.main
      },
      cheap: {
        color: theme.palette.primary.secondary
      }
    };
  });
  const classes = useStyles();

  const renderFlight = (flight, index) => {
    return (
      <List
        key={`${flight.departure}-${flight.arrival}-${flight.departureTime}-${
          flight.type
        }-${index}`}
      >
        <ListItem
          className={
            flight.type === "Business" ? classes.business : classes.cheap
          }
        >
          <div style={{ flex: 1 }}>
            <ListItemIcon>
              {flight.type === "Business" ? <MoneyIcon /> : <RemoveIcon />}
            </ListItemIcon>
            {flight.arrival} -> {flight.departure}
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <span>Departure Time: {convertMsToDate(flight.departureTime)}</span>
            <span>Arrival Time: {convertMsToDate(flight.arrivalTime)}</span>
          </div>
        </ListItem>
      </List>
    );
  };
  return (
    <div>{flights.map((flight, index) => renderFlight(flight, index))}</div>
  );
};
