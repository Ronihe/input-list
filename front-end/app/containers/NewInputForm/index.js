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
import saga from '../App/saga';

import Form from './Form';
import Input from './Input';

import { createNewInput } from './actions';
import { sendNewInput } from '../App/actions';
/* eslint-disable react/prefer-stateless-function */
export class NewInputForm extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>NewInputForm</title>
          <meta name="description" content="Description of NewInputForm" />
        </Helmet>
        <Form onSubmit={this.props.onSubmitForm}>
          <Input
            id="input"
            type="text"
            placeholder="random ideas"
            value={this.props.newInput}
            onChange={this.props.createNewInput}
          />

          <button onClick={this.props.sendNewInput}>Submit</button>
        </Form>
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
    sendNewInput: evt => {
      evt.preventDefault();
      dispatch(sendNewInput());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'newInputForm', reducer });
const withSaga = injectSaga({ key: 'inputs', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewInputForm);
