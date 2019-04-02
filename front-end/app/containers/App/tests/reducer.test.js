import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  loadInputs,
  loadInputsSuccess,
  loadInputsError,
  sendNewInput,
  sendNewInputSuccess,
  sendNewInputError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: true,
      sending: false,
      newInput: '',
      inputs: [],
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadInputs action correctly', () => {
    const expectedResult = state.set('loading', true).set('error', false);

    expect(appReducer(state, loadInputs())).toEqual(expectedResult);
  });

  it('should handle the loadInputsSuccess action correctly', () => {
    const inputs = [
      {
        id: '123',
        input: 'test',
        date_possted: '2019-04-02',
      },
    ];

    const expectedResult = state
      .set('loading', false)
      .set('error', false)
      .set('inputs', inputs);

    expect(appReducer(state, loadInputsSuccess(inputs))).toEqual(
      expectedResult,
    );
  });

  it('should handle the loadInputsError action correctly', () => {
    const error = {
      msg: 'error',
    };
    const expectedResult = state.set('loading', false).set('error', error);

    expect(appReducer(state, loadInputsError(error))).toEqual(expectedResult);
  });

  it('should handle the sendNewInput action correctly', () => {
    const expectedResult = state.set('sending', true).set('error', false);

    expect(appReducer(state, sendNewInput())).toEqual(expectedResult);
  });
  it('should handle the sendNewInputSuccess action correctly', () => {
    const newInput = {
      id: '124',
      input: 'new',
      date_possted: '2019-04-02',
    };
    const expectedResult = state
      .set('loading', false)
      .set('error', false)
      .set('newInput', newInput)
      .set('inputs', [newInput]);

    expect(appReducer(state, sendNewInputSuccess(newInput))).toEqual(
      expectedResult,
    );
  });
  it('should handle the sendNewInputError action correctly', () => {
    const error = {
      msg: 'error',
    };
    const expectedResult = state.set('loading', false).set('error', error);

    expect(appReducer(state, sendNewInputError(error))).toEqual(expectedResult);
  });
});
