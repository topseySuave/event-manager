import React from 'react';
import { shallow } from 'enzyme';
import AllCentersIndex from
  '../../../../src/components/centerComponent/allCenters';

describe('AllCentersIndex component', () => {
  const wrapper = shallow(<AllCentersIndex />);
  test('should have a snapshot of the top layout of the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should always render div elements', () => {
    const divs = wrapper.find('div');
    expect(divs.length).toBe(2);
  });

  test('should always render the body holder component', () => {
    const bodyHolder = wrapper.find('.body__holdr');
    expect(bodyHolder.exists()).toBeTruthy();
  });
});
