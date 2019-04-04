/**
 *
 * NewInputForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { push } from 'connected-react-router';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import { makeSelectNewinput } from './selectors';
import reducer from './reducer';

import Input from '../../components/Input';

import { changeInput, clearInput } from './actions';
import { sendNewInput } from '../App/actions';

import Button from '../../components/Button';
import Form from '../../components/Form';

/* eslint-disable react/prefer-stateless-function */
export class NewInputForm extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>NewInputForm</title>
          <meta name="description" content="Description of NewInputForm" />
        </Helmet>
        <Form>
          <Input
            id="input"
            type="text"
            placeholder="random ideas"
            value={this.props.newInput}
            onChange={this.props.changeInput}
          />

          <Button
            bgColor="#FF6347"
            onClick={
              this.props.newInput
                ? this.props.sendNewInput
                : () => alert('please put in some random ideas')
            }
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

NewInputForm.propTypes = {
  newInput: PropTypes.string,
  changeInput: PropTypes.func,
  sendNewInput: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newInput: makeSelectNewinput(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeInput: evt => dispatch(changeInput(evt.target.value)),
    sendNewInput: evt => {
      evt.preventDefault();
      dispatch(sendNewInput());
      dispatch(clearInput());
      dispatch(push('/'));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'newInputForm', reducer });

export default compose(
  withReducer,
  withConnect,
)(NewInputForm);
