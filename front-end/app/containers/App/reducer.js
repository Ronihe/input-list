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
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_INPUTS:
      return state.set('loading', true).set('error', false);
    case LOAD_INPUTS_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const newState = action.inputs;
      return state
        .set('loading', false)
        .set('error', false)
        .set('inputs', newState);
    case LOAD_INPUTS_ERROR:
      return state.set('loading', false).set('error', action.error);
    case SEND_NEWINPUT:
      return state.set('loading', true).set('error', false);
    case SEND_NEWINPUT_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('newInput', action.newInput)
        .set('inputs', [action.newInput, ...state.get('inputs')]);
    case SEND_NEWINPUT_ERROR:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default appReducer;
