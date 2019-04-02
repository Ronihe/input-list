/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import NavBar from '../../components/NavBar/Loadable';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <NavBar />
      <GlobalStyle />
    </div>
  );
}
