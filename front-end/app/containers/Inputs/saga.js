import { call, put, all, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { loadInputsError, loadInputsSuccess } from './actions';
import { LOAD_INPUTS } from './constants';

export function* fetchInputs() {
  console.log('did I get here?');
  const requestURL = 'http://localhost:3001/inputs';
  try {
    const result = yield call(request, requestURL);
    const inputs = result.inputs;
    yield put(loadInputsSuccess(inputs));
  } catch (err) {
    yield put(loadInputsError(err));
  }
}

// WATCHERS
// export function* sendNewMessage() {
//   yield takeLatest(SEND_NEW_MESSAGE, sendMessage);
// }

export function* loadInputs() {
  yield takeLatest(LOAD_INPUTS, fetchInputs);
}

// Individual exports for testing
export default function* inputsSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadInputs()]);
}
