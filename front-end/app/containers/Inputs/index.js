/**
 *
 * Inputs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeInputsSelector } from '../App/selectors';
import { loadInputs } from '../App/actions';
import reducer from '../App/reducer';
import saga from '../App/saga';

/* eslint-disable react/prefer-stateless-function */
export class Inputs extends React.Component {
  componentDidMount() {
    // load inputs
    this.props.loadInputs();
  }

  render() {
    const inputs = [...this.props.inputs];
    return (
      <div>
        <Helmet>
          <title>Inputs</title>
          <meta name="description" content="Description of Inputs" />
        </Helmet>
        {inputs.reverse().map(input => (
          <p key={input.id}>
            {input.date_posted.split('T')[0]}
            {input.input}
          </p>
        ))}
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
