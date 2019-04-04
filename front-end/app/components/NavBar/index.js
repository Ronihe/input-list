/**
 *
 * NavBar
 *
 */

import React from 'react';
import StyledNavBar from './StyledNavBar';
import StyledNavLink from './StyledNavLink';
import Button from '../Button';

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
      </div>
    );
  }
}

NavBar.propTypes = {};

export default NavBar;
