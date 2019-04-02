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
  fetchMessages,
  sendMessage,
  loadMessages,
  sendNewMessage,
} from '../saga';

const watcherSagas = defaultSaga();

describe('all sagas watcher', () => {
  it('should watch for other actions', () => {
    const effect = watcherSagas.next().value;
    expect(effect).toEqual(all([loadMessages(), sendNewMessage()]));
  });
});

describe('fetchMessages saga', () => {
  let loadMessagesGenerator;

  // have to test twice, once for a successful load and once for an error
  // the beforeEach calls all the yields that has to happen before each of the test.
  beforeEach(() => {
    loadMessagesGenerator = fetchMessages();
    const callDescriptor = loadMessagesGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the loadMessagesSuccess action if it calls API successfully', () => {
    const response = [{ id: 1, message: 'hello' }, { id: 2, message: 'world' }];
    const putDescriptor = loadMessagesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(loadMessagesSuccess(response)));
  });
  it('should dispatch the loadMessagesError if the API call errors', () => {
    const response = new Error('some error');
    const putDescriptor = loadMessagesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loadMessagesError(response)));
  });
});

describe('sendMessage saga', () => {
  let sendMessageGenerator;

  // have to test twice, once for a successful load and once for an error
  // the beforeEach calls all the yields that has to happen before each of the test.
  beforeEach(() => {
    sendMessageGenerator = sendMessage();
    const selectDescriptor = sendMessageGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = sendMessageGenerator.next('message').value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the sendNewMessageSuccess action if it posts to the API successfully', () => {
    const newMessage = { id: 1, message: 'hello' };
    const putDescriptor = sendMessageGenerator.next(newMessage).value;
    expect(putDescriptor).toEqual(put(sendNewMessageSuccess(newMessage)));
  });
  it('should dispatch the sendNewMessageError action if the API errors', () => {
    const response = new Error('oh no');
    const putDescriptor = sendMessageGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(sendNewMessageError(response)));
  });
});
