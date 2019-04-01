/**
 *
 * NewInputForm actions
 * @param  {newInput} newInput The new text of the input field
 *
 * @return {object}    An action object with a type of CREATE_INPUT
 *
 *
 */

import { CREATE_INPUT } from './constants';

export function createNewInput(newInput) {
  return {
    type: CREATE_INPUT,
    newInput,
  };
}
