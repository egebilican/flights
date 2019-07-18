import { call, put, takeLatest, fork, delay } from "redux-saga/effects";
import { FLIGHTS_ACTIONS } from "../reducers/flights";
import { getRequest } from "../utils/request";

const API = {
  business: "https://tokigames-challenge.herokuapp.com/api/flights/business",
  cheap: "https://tokigames-challenge.herokuapp.com/api/flights/cheap"
};

function* fetchCheap() {
  const cheapFlights = yield call(getRequest, API.cheap);
  yield put({
    type: FLIGHTS_ACTIONS.SET_CHEAP_FLIGHTS,
    flights: cheapFlights.data
  });
}

function* fetchBusiness() {
  const businessFlights = yield call(getRequest, API.business);
  yield put({
    type: FLIGHTS_ACTIONS.SET_BUSINESS_FLIGHTS,
    flights: businessFlights.data
  });
}
//TODO: Add loading indicator
function* fetchFlightData(action) {
  try {
    yield fork(fetchCheap);
    yield fork(fetchBusiness);
  } catch (e) {
    yield put({
      type: FLIGHTS_ACTIONS.FETCH_FAILED,
      message: e.message
    });
    throw new Error(e);
  }
}

function* mySaga() {
  yield takeLatest(FLIGHTS_ACTIONS.FETCH_FLIGHTS, fetchFlightData);
}

export default mySaga;
