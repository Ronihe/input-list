/*
 *
 * NewInputForm reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_INPUT } from './constants';

export const initialState = fromJS({ newInput: '' });

function newInputFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return state.set('newInput', action.newInput);
    default:
      return state;
  }
}

export default newInputFormReducer;
