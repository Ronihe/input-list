/**
 *
 * NavBar
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StyledNavBar from './StyledNavBar';
import StyledNavLink from './StyledNavLink';
import Button from '../Button';
import Inputs from '../../containers/Inputs/Loadable';
import NewInputForm from '../../containers/NewInputForm/Loadable';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <StyledNavBar>
          <Button bgColor="#32CD32">
            <StyledNavLink exact to="/">
              INPUTS
            </StyledNavLink>{' '}
          </Button>
          <Button bgColor="#40E0D0">
            <StyledNavLink exact to="/newinput">
              NEW INPUT
            </StyledNavLink>
          </Button>
        </StyledNavBar>
        <Switch>
          <Route exact path="/" render={() => <Inputs />} />
          <Route
            exact
            path="/newinput"
            render={props => <NewInputForm {...props} />}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

NavBar.propTypes = {};

export default NavBar;
