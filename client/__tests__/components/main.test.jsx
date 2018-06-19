import React from 'react';
import { mount, shallow } from 'enzyme';
import Main from
  '../../src/components/Main';

describe('Main Routing Component', () => {
  const wrapper = shallow(<Main />);
  test('have make a snapshot of the routing component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
