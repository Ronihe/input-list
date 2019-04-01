import { fromJS } from 'immutable';
import newInputFormReducer from '../reducer';

describe('newInputFormReducer', () => {
  it('returns the initial state', () => {
    expect(newInputFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
