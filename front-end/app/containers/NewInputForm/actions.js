/**
 *
 * NewInputForm actions
 * @param  {newInput} newInput The new text of the input field
 *
 * @return {object}    An action object with a type of CREATE_INPUT
 *
 *
 */

import { CHANGE_INPUT, CLEAR_INPUT } from './constants';

export function changeInput(newInput) {
  return {
    type: CHANGE_INPUT,
    newInput,
  };
}
export function clearInput() {
  return {
    type: CLEAR_INPUT,
  };
}
