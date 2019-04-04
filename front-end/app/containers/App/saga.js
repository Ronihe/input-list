import {
  call,
  put,
  all,
  takeLatest,
  select,
  takeEvery,
} from 'redux-saga/effects';
import request from 'utils/request';
import {
  loadInputsError,
  loadInputsSuccess,
  sendNewInputError,
  sendNewInputSuccess,
} from './actions';
import { LOAD_INPUTS, SEND_NEWINPUT } from './constants';
import { makeSelectNewinput } from '../NewInputForm/selectors';

export function* fetchInputs() {
  const requestURL = 'http://localhost:3001/inputs';
  try {
    console.log('I am fetching inputs');
    const result = yield call(request, requestURL);
    const inputs = [...result.inputs];
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
  console.log('I am listenning to the posting inout');

  yield takeLatest(LOAD_INPUTS, fetchInputs);
}

export function* postNewInput() {
  const input = yield select(makeSelectNewinput());
  const requestURL = 'http://localhost:3001/inputs';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ input }),
  };
  try {
    console.log(options.body);
    const result = yield call(request, requestURL, options);
    const newInput = result.input;
    console.log('I am the new input', input);
    yield put(sendNewInputSuccess(newInput));
  } catch (err) {
    yield put(sendNewInputError(err));
  }
}

// WATCHERS

export function* sendNewInput() {
  console.log('I am listenning to the sending new inout');
  yield takeEvery(SEND_NEWINPUT, postNewInput);
}

// Individual exports for testing
export default function* inputsSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadInputs(), sendNewInput()]);
}
