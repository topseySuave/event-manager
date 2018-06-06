import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchFasterForm from
  '../../../../src/components/centerComponent/allCenters/searchFasterForm';

describe('SearchFasterForm component', () => {
  let props = {
    onSearch: jest.fn()
  };
  let event = {
    preventDefault: jest.fn(),
    target: {
      name: 'location',
      value: 'ikeja, lagos'
    }
  };
  const wrapper = shallow(<SearchFasterForm {...props} />);
  wrapper.setState({
    loaction: 'ikeja, lagos',
    price: 100000,
    capacity: 500
  });
  let instance = wrapper.instance();
  test('Should have a snapshot of the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('handleSearchChange should set the state an appropiate field', () => {
    instance.handleSearchChange(event);
  });

  test('handleSearchStart should start search if all field are filled', () => {
    instance.handleSearchStart(event);
  });
});
