/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/named */
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

import InputsList from '../../components/InputsList';
import {
  makeInputsSelector,
  makeInputLoadingError,
  makeInputLoading,
} from '../App/selectors';
import DisplayInputs from './DisplayInputs';

/* eslint-disable react/prefer-stateless-function */

export class Inputs extends React.Component {
  render() {
    const { loading, error, inputs } = this.props;
    const inputsListProps = {
      loading,
      error,
      inputs,
    };

    return (
      <DisplayInputs>
        <Helmet>
          <title>Inputs</title>
          <meta name="description" content="Description of Inputs" />
        </Helmet>

        <InputsList {...inputsListProps} />
      </DisplayInputs>
    );
  }
}

Inputs.propTypes = {
  inputs: PropTypes.any,
  loading: PropTypes.any,
  error: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  inputs: makeInputsSelector(),
  loading: makeInputLoading(),
  error: makeInputLoadingError(),
});

const withConnect = connect(mapStateToProps);

export default withConnect(Inputs);
