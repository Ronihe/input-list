/**
 * The global state selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectInputsDomain = state => state.get('inputs', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Inputs
 */

const makeSelectInputs = () =>
  createSelector(selectInputsDomain, globalState => globalState.toJS());

const makeInputsSelector = () =>
  createSelector(selectInputsDomain, globalState => globalState.get('inputs'));

const makeInputLoading = () =>
  createSelector(selectInputsDomain, globalState => globalState.get('loading'));
const makeInputLoadingError = () =>
  createSelector(selectInputsDomain, globalState => globalState.get('error'));

export default makeSelectInputs;

export {
  selectInputsDomain,
  makeInputsSelector,
  makeInputLoading,
  makeInputLoadingError,
};
