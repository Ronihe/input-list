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
import { makeInputsSelector } from './selectors';
import { loadInputs } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Inputs extends React.Component {
  componentDidMount() {
    // load inputs
    this.props.loadInputs();
  }

  render() {
    const inputs = [...this.props.inputs];
    console.log('inputs', typeof inputs, inputs);
    console.log('loadInputs', typeof loadInputs);
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
  loadInputs: PropTypes.func.isRequired,
  inputs: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  inputs: makeInputsSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadInputs: () => {
      dispatch(loadInputs());
    },
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
