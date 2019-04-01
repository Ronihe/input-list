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
import { makeSelectNewinput } from './selectors';
import reducer from './reducer';
import saga from './saga';

import Form from './Form';
import Input from './Input';

import { createNewInput } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class NewInputForm extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>NewInputForm</title>
          <meta name="description" content="Description of NewInputForm" />
        </Helmet>
        {/* <Form onSubmit={this.props.onSubmitForm}> */}
        <label htmlFor="input">
          <Input
            id="input"
            type="text"
            placeholder="random ideas"
            value={this.props.newInput}
            onChange={this.props.createNewInput}
          />
        </label>
        {/* </Form> */}
      </div>
    );
  }
}

NewInputForm.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  newInput: PropTypes.string,
  createNewInput: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newInput: makeSelectNewinput(),
});

function mapDispatchToProps(dispatch) {
  return {
    createNewInput: evt => dispatch(createNewInput(evt.target.value)),
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
