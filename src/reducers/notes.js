export const NOTES_ACTIONS = {
  ADD_NOTE: "ADD_NOTE",
  REMOVE_NOTE: "REMOVE_NOTE"
};

export const addNote = note => ({
  type: NOTES_ACTIONS.ADD_NOTE,
  note
});

export const removeNote = noteIndex => ({
  type: NOTES_ACTIONS.REMOVE_NOTE,
  noteIndex
});
const INITIAL_STATE = [];

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTES_ACTIONS.ADD_NOTE:
      return [...state, action.note];
    case NOTES_ACTIONS.REMOVE_NOTE: {
      const newState = [
        ...state.slice(0, action.noteIndex),
        ...state.slice(action.noteIndex + 1)
      ];
      return newState;
    }
    default:
      return state;
  }
};

export default filters;
