import React from 'react';
import { shallow } from 'enzyme';
import Footer from
  '../../../../src/components/bodyComponents/footer/footer';

describe('Footer component', () => {
  const wrapper = shallow(<Footer />);
  test('Footer component should mount', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
