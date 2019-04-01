/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <NavLink exact to="/">
        inputs
      </NavLink>{' '}
      <NavLink exact to="/">
        new Input
      </NavLink>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* make api from back end get the list input from the render it on the screen */}
        {/* todo: add a new input form component;  */}
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
