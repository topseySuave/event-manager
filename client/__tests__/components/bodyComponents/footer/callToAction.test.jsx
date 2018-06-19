import React from 'react';
import { shallow } from 'enzyme';
import CallToAction from
  '../../../../src/components/bodyComponents/footer/CallToAction';

describe('CallToAction component', () => {
  const wrapper = shallow(<CallToAction />);
  test('should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
