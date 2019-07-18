import React, { Suspense } from "react";
import { connect } from "react-redux";
import { addNote, removeNote } from "../../reducers/notes";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

const NotesForm = React.lazy(() => import("../NotesForm"));

class MainPage extends React.Component {
  renderNote(note, index) {
    return (
      <ListItem key={`${index}-${note.arrival}`}>
        Note about {note.arrival} to {note.departure} flight : {note.note}
        <Button onClick={() => this.props.removeNote(index)}>Remove</Button>
      </ListItem>
    );
  }
  render() {
    const handleSubmit = note => {
      this.props.addNote(note);
    };
    return (
      <div>
        <div>
          Here you can take notes about your own custom flights. I would prefer
          Formik, though. Sorry about the UI.
        </div>
        <Suspense fallback={<div>Loading..</div>}>
          <NotesForm onSubmit={handleSubmit} />
        </Suspense>
        <List>
          {this.props.savedNotes.map((note, index) =>
            this.renderNote(note, index)
          )}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    savedNotes: state.notes
  };
};

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note)),
  removeNote: noteIndex => dispatch(removeNote(noteIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
