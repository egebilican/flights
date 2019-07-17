import React from "react";

export const InputBar = props => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const onSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    props.handleSubmit(searchTerm, props.type);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder={props.placeholder}
        value={searchTerm}
        onChange={onSearchTermChange}
      />
    </form>
  );
};
