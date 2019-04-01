/*
 *
 * NewInputForm reducer
 *
 */

import { fromJS } from 'immutable';
import { CREATE_INPUT } from './constants';

export const initialState = fromJS({ newInput: '' });

function newInputFormReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_INPUT:
      return state.set('newInput', action.newInput);
    default:
      return state;
  }
}

export default newInputFormReducer;
