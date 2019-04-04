/**
 * The global state selectors
 */
import { createSelector } from 'reselect';

const selectAppDomain = state => state.get('app');

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
