import React from 'react';
import { shallow } from 'enzyme';
import CenterDetailIndex from
  '../../../../src/components/centerComponent/centerDetail/';

describe('CenterDetailIndex component', () => {
  let props = {
    match: {
      params: {}
    }
  };
  const wrapper = shallow(<CenterDetailIndex {...props} />);
  test('should take a snapshot and mount the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
