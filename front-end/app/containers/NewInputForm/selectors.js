import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the newInputForm state domain
 */

const selectNewInputFormDomain = state =>
  state.get('newInputForm', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NewInputForm
 */

const makeSelectNewinput = () =>
  createSelector(selectNewInputFormDomain, substate =>
    substate.get('newInput'),
  );

// export default makeSelectNewInputForm;
export { selectNewInputFormDomain, makeSelectNewinput };
