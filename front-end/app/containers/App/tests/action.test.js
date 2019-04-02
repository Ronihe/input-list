import {
  loadInputs,
  loadInputsSuccess,
  loadInputsError,
  sendNewInput,
  sendNewInputError,
  sendNewInputSuccess,
} from '../actions';

import {
  LOAD_INPUTS,
  LOAD_INPUTS_ERROR,
  LOAD_INPUTS_SUCCESS,
  SEND_NEWINPUT,
  SEND_NEWINPUT_ERROR,
  SEND_NEWINPUT_SUCCESS,
} from '../constants';

describe('App actions', () => {
  describe('loadInputs', () => {
    it('has the correct type', () => {
      const expected = {
        type: LOAD_INPUTS,
      };
      expect(loadInputs()).toEqual(expected);
    });
  });
  describe('loadInputsSuccess', () => {
    it('has the correct type and returns the inputs', () => {
      const inputs = [{ id: 1, input: 'test', date_posted: '2019-04-01' }];
      const expected = { type: LOAD_INPUTS_SUCCESS, inputs };
      expect(loadInputsSuccess(inputs)).toEqual(expected);
    });
  });
  describe('loadInputsError', () => {
    it('has the correct type and returns the error', () => {
      const error = 'error';
      const expected = { type: LOAD_INPUTS_ERROR, error };
      expect(loadInputsError(error)).toEqual(expected);
    });
  });
  describe('sendNewInput', () => {
    it('has the correct type ', () => {
      const expected = { type: SEND_NEWINPUT };
      expect(sendNewInput()).toEqual(expected);
    });
  });
  describe('sendNewInputSuccess', () => {
    it('has the correct type and returns the message', () => {
      const newInput = { id: 2, input: 'test2', date_posted: '2019-04-01' };
      const expected = {
        type: SEND_NEWINPUT_SUCCESS,
        newInput,
      };
      expect(sendNewInputSuccess(newInput)).toEqual(expected);
    });
  });
  describe('sendNewInputError', () => {
    it('has the correct type and returns the error', () => {
      const error = 'error';
      const expected = { type: SEND_NEWINPUT_ERROR, error };
      expect(sendNewInputError(error)).toEqual(expected);
    });
  });
});
