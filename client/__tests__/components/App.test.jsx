import React from 'react';
import { shallow } from 'enzyme';
import AppComponent from
  '../../src/components/App';

describe('App component', () => {
  const wrapper = shallow(<AppComponent />);
  test('App component should mount', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
