import React from 'react';
import { mount, shallow } from 'enzyme';
import CenterModal from
  '../../../src/components/modals/CenterModal';

describe('CenterModal component', () => {
  const wrapper = shallow(<CenterModal />);
  test('take a snapshot of the mounted component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
