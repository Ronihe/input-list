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
} from './constants';

export const initialState = fromJS({ inputs: [], loading: false, error: true });

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
    default:
      return state;
  }
}

export default inputsReducer;
