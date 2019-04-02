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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectNewinput } from './selectors';
import reducer from './reducer';
import saga from '../App/saga';

import Input from '../../components/Input';

import { changeInput, clearInput } from './actions';
import { sendNewInput } from '../App/actions';

import Button from '../../components/Button';

/* eslint-disable react/prefer-stateless-function */
export class NewInputForm extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>NewInputForm</title>
          <meta name="description" content="Description of NewInputForm" />
        </Helmet>
        <form id="input">
          <Input
            id="input"
            type="text"
            placeholder="random ideas"
            value={this.props.newInput}
            onChange={this.props.changeInput}
          />
        </form>
        <Button
          type="submit"
          form="input"
          onClick={
            this.props.newInput
              ? this.props.sendNewInput
              : // eslint-disable-next-line no-alert
                () => alert('please put in some random ideas')
          }
        >
          Submit
        </Button>
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
    sendNewInput: () => {
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
const withSaga = injectSaga({ key: 'inputs', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewInputForm);
