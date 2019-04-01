import { fromJS } from 'immutable';
import inputsReducer from '../reducer';

describe('inputsReducer', () => {
  it('returns the initial state', () => {
    expect(inputsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
