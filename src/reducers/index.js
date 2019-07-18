import { combineReducers } from "redux";
import flights from "./flights";
import filters from "./filters";
import notes from "./notes";
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  flights,
  filters,
  notes,
  form: formReducer
});
