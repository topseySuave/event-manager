import React from 'react';
import { shallow } from 'enzyme';
import Footer from
  '../../../../src/components/bodyComponents/footer/Footer';

describe('Footer component', () => {
  const wrapper = shallow(<Footer />);
  test('should have a snapshot for unexpected change', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
