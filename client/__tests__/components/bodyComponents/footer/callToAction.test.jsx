import React from 'react';
import { shallow } from 'enzyme';
import CallToAction from
  '../../../../src/components/bodyComponents/footer/callToAction';

describe('CallToAction component', () => {
  const wrapper = shallow(<CallToAction />);
  test('CallToAction component should mount', () => {
    expect(wrapper).toMatchSnapshot();
  });
});