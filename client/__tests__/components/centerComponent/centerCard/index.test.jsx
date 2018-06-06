import React from 'react';
import { shallow, mount } from 'enzyme';
import CenterCard from
  '../../../../src/components/centerComponent/centerCard/centerCard';

describe('CenterCard component', () => {
  let props = {
    to: '/home',
    center: { id: 3, title: 'never enough', price: '100000' }
  };
  const wrapper = shallow(<CenterCard {...props} />);
  test('component will mount', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
