import React from 'react';
import { shallow } from 'enzyme';
import AllCentersIndex from
  '../../../../src/components/centerComponent/allCenters';

describe('AllCentersIndex component', () => {
  const wrapper = shallow(<AllCentersIndex />);
  test('component will mount', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
