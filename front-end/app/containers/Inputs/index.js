/**
 *
 * Inputs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectInputs from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Inputs extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Inputs</title>
          <meta name="description" content="Description of Inputs" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Inputs.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  inputs: makeSelectInputs(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'inputs', reducer });
const withSaga = injectSaga({ key: 'inputs', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Inputs);
