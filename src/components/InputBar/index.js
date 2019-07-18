import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

export const InputBar = props => {
  const useStyles = makeStyles(theme => {
    return {
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 150,
        color: theme.palette.primary.main
      }
    };
  });

  const classes = useStyles();

  return (
    <TextField
      id={props.id}
      label={props.label}
      className={classes.textField}
      value={props.value}
      onChange={props.handleChange}
      margin="normal"
      placeholder={props.placeholder}
    />
  );
};
