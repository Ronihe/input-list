import React from 'react';
import { shallow } from 'enzyme';

import App from '../index';
import NavBar from '../../../components/NavBar';
describe('<App />', () => {
  it('should render some routes', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(NavBar)).toHaveLength(1);
  });
});
