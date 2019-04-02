/**
 *
 * NewInputForm actions
 * @param  {newInput} newInput The new text of the input field
 *
 * @return {object}    An action object with a type of CREATE_INPUT
 *
 *
 */

import { CHANGE_INPUT } from './constants';

export function createNewInput(newInput) {
  return {
    type: CHANGE_INPUT,
    newInput,
  };
}
