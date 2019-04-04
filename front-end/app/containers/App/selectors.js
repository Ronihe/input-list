/**
 * The global state selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAppDomain = state => state.get('app', initialState);

const makeInputsSelector = () =>
  createSelector(selectAppDomain, globalState => globalState.get('inputs'));

const makeInputLoading = () =>
  createSelector(selectAppDomain, globalState => globalState.get('loading'));
const makeInputLoadingError = () =>
  createSelector(selectAppDomain, globalState => globalState.get('error'));

export {
  selectAppDomain,
  makeInputsSelector,
  makeInputLoading,
  makeInputLoadingError,
};
