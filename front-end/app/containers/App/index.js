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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withRouter, Switch, Route } from 'react-router-dom';

import reducer from './reducer';
import saga from './saga';

import NavBar from '../../components/NavBar/Loadable';
import GlobalStyle from '../../global-styles';

import { loadInputs } from './actions';
import NewInputForm from '../NewInputForm/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import Inputs from '../Inputs/Loadable';

export class App extends React.Component {
  componentDidMount() {
    // load inputs
    this.props.loadInputs();
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Inputs />} />
          <Route
            exact
            path="/newinput"
            render={props => <NewInputForm {...props} />}
          />
          <Route component={NotFoundPage} />
        </Switch>
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

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  withReducer,
  withSaga,
  withRouter,
  withConnect,
)(App);
