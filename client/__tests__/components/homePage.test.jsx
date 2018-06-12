import React from 'react';
import { mount, shallow } from 'enzyme';
import HomePage from
  '../../src/components/HomePage';

describe('HomePage Component', () => {
  const wrapper = shallow(<HomePage />);
  test('make a snapshot of the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
