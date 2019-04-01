/*
 *
 * Inputs actions
 *
 */

import {
  LOAD_INPUTS,
  LOAD_INPUTS_SUCCESS,
  LOAD_INPUTS_ERROR,
} from './constants';

export function loadInputs() {
  return {
    type: LOAD_INPUTS,
  };
}

export function loadInputsSuccess(inputs) {
  return {
    type: LOAD_INPUTS_SUCCESS,
    inputs,
  };
}

export function loadInputsError(error) {
  return {
    type: LOAD_INPUTS_ERROR,
    error,
  };
}
