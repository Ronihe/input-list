import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the inputs state domain
 */

const selectInputsDomain = state => state.get('inputs', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Inputs
 */

const makeSelectInputs = () =>
  createSelector(selectInputsDomain, substate => substate.toJS());

export default makeSelectInputs;
export { selectInputsDomain };
