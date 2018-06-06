import React from 'react';
import { mount, shallow } from 'enzyme';
import Modals from
  '../../../src/components/modals/';

describe('Modals component', () => {
  const wrapper = shallow(<Modals />);
  test('component should mount', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
