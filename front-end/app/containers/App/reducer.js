/*
 *
 * Inputs reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_INPUTS,
  LOAD_INPUTS_SUCCESS,
  LOAD_INPUTS_ERROR,
  SEND_NEWINPUT,
  SEND_NEWINPUT_SUCCESS,
  SEND_NEWINPUT_ERROR,
} from './constants';

export const initialState = fromJS({
  inputs: [],
  newInput: '',
  loading: false,
  error: true,
  sending: false,
});

function inputsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_INPUTS:
      return state.set('loading', true).set('error', false);
    case LOAD_INPUTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('inputs', action.inputs);
    case LOAD_INPUTS_ERROR:
      return state.set('loading', false).set('error', action.error);
    case SEND_NEWINPUT:
      return state.set('sending', true).set('error', false);
    case SEND_NEWINPUT_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('newInput', action.newInput)
        .set('inputs', [...state.get('inputs'), action.newInput]);
    case SEND_NEWINPUT_ERROR:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default inputsReducer;
