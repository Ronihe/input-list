/**
 * Test sagas for App
 */

/* eslint-disable redux-saga/yield-effects */
//  take, call, put, select,
import { all, put } from 'redux-saga/effects';

import {
  loadInputs,
  loadInputsSuccess,
  loadInputsError,
  sendNewInput,
  sendNewInputError,
  sendNewInputSuccess,
} from '../actions';

import defaultSaga, {
  fetchInputs,
  loadInputs,
  postNewInput,
  sendNewInput,
} from '../saga';

const watcherSagas = defaultSaga();

describe('all sagas watcher', () => {
  it('should watch for other actions', () => {
    const effect = watcherSagas.next().value;
    expect(effect).toEqual(all([loadInputs(), sendNewInput()]));
  });
});

describe('fetchInputs saga', () => {
  let loadInputsGenerator;

  // have to test twice, once for a successful load and once for an error
  // the beforeEach calls all the yields that has to happen before each of the test.
  beforeEach(() => {
    loadInputsGenerator = fetchInputs();
    const callDescriptor = loadInputsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the loadInputsSuccess action if it calls API successfully', () => {
    const response = [{ id: 1, message: 'hello' }, { id: 2, message: 'world' }];
    const putDescriptor = loadInputsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(loadInputsSuccess(response)));
  });
  it('should dispatch the loadMessagesError if the API call errors', () => {
    const response = new Error('some error');
    const putDescriptor = loadInputsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loadInputsError(response)));
  });
});

describe('sendInputs saga', () => {
  let sendNewInputGenerator;

  // have to test twice, once for a successful load and once for an error
  // the beforeEach calls all the yields that has to happen before each of the test.
  beforeEach(() => {
    sendNewInputGenerator = postNewInput();
    const selectDescriptor = sendNewInputGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = sendNewInputGenerator.next('message').value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the sendNewMessageSuccess action if it posts to the API successfully', () => {
    const newMessage = { id: 1, message: 'hello' };
    const putDescriptor = sendNewInputGenerator.next(newMessage).value;
    expect(putDescriptor).toEqual(put(sendNewInputSuccess(newMessage)));
  });
  it('should dispatch the sendNewMessageError action if the API errors', () => {
    const response = new Error('oh no');
    const putDescriptor = sendNewInputGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(sendNewInputError(response)));
  });
});
