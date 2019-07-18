import React from "react";
import { Field, reduxForm } from "redux-form";

let ReduxForm = props => {
  const { handleSubmit } = props;
  //just to add  a form. I did not exactly get what is expected here :(
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="arrival">Arrival City</label>
        <Field name="arrival" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="departure">Departure City</label>
        <Field name="departure" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="note">Note</label>
        <Field name="note" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const NotesForm = reduxForm({
  // a unique name for the form
  form: "flightNotes"
})(ReduxForm);

export default NotesForm;
