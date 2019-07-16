import { call, put, takeLatest } from "redux-saga/effects";
import { FLIGHTS_ACTIONS } from "../reducers/flights";
import { getRequest } from "../utils/request";

const API = {
  business: "https://tokigames-challenge.herokuapp.com/api/flights/business",
  cheap: "https://tokigames-challenge.herokuapp.com/api/flights/cheap"
};

function* fetchFlightData(action) {
  try {
    //TODO: MAKE THEM PARALLEL
    console.log("SAGA WORKING");
    const businessFlights = yield call(getRequest, API.business);
    const cheapFlights = yield call(getRequest, API.cheap);
    yield put({
      type: FLIGHTS_ACTIONS.SET_BUSINESS_FLIGHTS,
      flights: businessFlights.data
    });
    yield put({
      type: FLIGHTS_ACTIONS.SET_CHEAP_FLIGHTS,
      flights: cheapFlights.data
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: FLIGHTS_ACTIONS.FETCH_FAILED,
      message: e.message
    });
  }
}

function* mySaga() {
  yield takeLatest(FLIGHTS_ACTIONS.FETCH_FLIGHTS, fetchFlightData);
}

export default mySaga;
