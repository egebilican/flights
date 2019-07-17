import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

export const InputBar = props => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const onSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    props.handleSubmit(searchTerm, props.type);
  };

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
    <form onSubmit={onSubmit}>
      <TextField
        id={props.id}
        label={props.label}
        className={classes.textField}
        value={searchTerm}
        onChange={onSearchTermChange}
        margin="normal"
        placeholder={props.placeholder}
      />
    </form>
  );
};
