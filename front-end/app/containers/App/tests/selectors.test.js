import { fromJS } from 'immutable';

import {
  selectInputsDomain,
  makeInputsSelector,
  makeInputLoading,
  makeInputLoadingError,
} from '../selectors';

describe('selectInputsDomain', () => {
  it('selects the app state which gets the initial state', () => {
    const initialState = fromJS({
      inputs: [],
      newInput: '',
      loading: false,
      error: true,
      sending: false,
    });
    const mockAppContainerState = fromJS({
      appContainer: initialState,
    });

    expect(selectInputsDomain(mockAppContainerState)).toEqual(initialState);
  });
});

describe('makeInputsSelector', () => {
  const inputsSelector = makeInputsSelector();
  it('should select messages from the mocked state', () => {
    const inputs = fromJS([{ input: 'hello' }, { input: 'world' }]);
    const mockedState = fromJS({
      appContainer: {
        inputs,
      },
    });
    expect(inputsSelector(mockedState)).toEqual(inputs);
  });
});

describe('makeInputLoading', () => {
  const inputLoadingSelector = makeInputLoading();
  it('should select newMessage from the mocked state', () => {
    const loading = true;
    const mockedState = fromJS({
      appContainer: {
        loading,
      },
    });
    expect(inputLoadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeInputLoadingError', () => {
  it('should select the entire appContainer state', () => {
    const inputLoadingErrorSelector = makeInputLoadingError();
    const error = 'error';
    const mockedState = fromJS({ appContainer: { error } });
    expect(inputLoadingErrorSelector(mockedState)).toEqual(error);
  });
});
