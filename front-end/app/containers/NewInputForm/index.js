/**
 *
 * NewInputForm
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
import makeSelectNewInputForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class NewInputForm extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>NewInputForm</title>
          <meta name="description" content="Description of NewInputForm" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

NewInputForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  newInputForm: makeSelectNewInputForm(),
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

const withReducer = injectReducer({ key: 'newInputForm', reducer });
const withSaga = injectSaga({ key: 'newInputForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewInputForm);
