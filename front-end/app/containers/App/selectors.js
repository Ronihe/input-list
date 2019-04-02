/**
 * The global state selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectInputsDomain = state => state.get('inputs', initialState);

const makeInputsSelector = () =>
  createSelector(selectInputsDomain, globalState => globalState.get('inputs'));

const makeInputLoading = () =>
  createSelector(selectInputsDomain, globalState => globalState.get('loading'));
const makeInputLoadingError = () =>
  createSelector(selectInputsDomain, globalState => globalState.get('error'));

export {
  selectInputsDomain,
  makeInputsSelector,
  makeInputLoading,
  makeInputLoadingError,
};
