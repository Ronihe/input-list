// import React from 'react';
// import { shallow } from 'enzyme';

// import List from '../index';

// describe('<List />', () => {

//   it('should pass all items props to rendered component', () => {
//     const items = [{ id: 1, name: 'Hello' }, { id: 2, name: 'World' }];

//     const component = ({ item }) => <ListItem>{item.name}</ListItem>; // eslint-disable-line react/prop-types

//     const renderedComponent = shallow(
//       <List items={items} component={component} />,
//     );
//     expect(renderedComponent.find(component)).toHaveLength(2);
//     expect(
//       renderedComponent
//         .find(component)
//         .at(0)
//         .prop('item'),
//     ).toBe(items[0]);
//     expect(
//       renderedComponent
//         .find(component)
//         .at(1)
//         .prop('item'),
//     ).toBe(items[1]);
//   });
// });
