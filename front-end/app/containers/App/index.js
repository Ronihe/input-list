/* eslint-disable import/no-named-as-default-member */
/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withRouter } from 'react-router-dom';

import reducer from './reducer';
import saga from './saga';

import NavBar from '../../components/NavBar/Loadable';
import GlobalStyle from '../../global-styles';

import { loadInputs } from './actions';
export class App extends React.Component {
  componentDidMount() {
    // load inputs
    this.props.loadInputs();
  }

  render() {
    return (
      <div>
        <NavBar />
        <GlobalStyle />
      </div>
    );
  }
}

App.propTypes = {
  loadInputs: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    loadInputs: () => {
      dispatch(loadInputs());
    },
  };
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'inputs', reducer });
const withSaga = injectSaga({ key: 'inputs', saga });

export default compose(
  withReducer,
  withSaga,
  withRouter,
  withConnect,
)(App);
