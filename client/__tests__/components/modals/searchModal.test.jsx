import React from 'react';
import { mount, shallow } from 'enzyme';
import { SearchModal } from '../../../src/components/modals/SearchModal';
import { createEventRequest } from '../../../src/actions/events-actions/index';
import {
  filterCenterTitle,
  filterEventTitle
} from '../../../src/actions/searchAction';

let wrapper, instance, mounted;
let store, props;

const getComponent = () => {
  if (!mounted) {
    props = {
      centerStore: { centers: [{ id: 1, title: 'this is us' }] },
      eventStore: { events: [{ id: 2, title: 'this is an event' }] },
      filterCenterTitle,
      filterEventTitle
    };
    mounted = shallow(<SearchModal {...props} />);
  }
  return mounted;
};

describe('SearchModal component', () => {
  beforeEach(() => {
    wrapper = getComponent();
    Materialize.toast = jest.fn();
  });
  let handleSearchInputSpy = jest
    .spyOn(SearchModal.prototype, 'handleSearchInput');

  test('should have a snapshot of the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('component should receive props and update state', () => {
    wrapper.instance().componentWillReceiveProps(props);
    expect(wrapper.state('centers').length).toBeGreaterThan(0);
    expect(wrapper.state('events').length).toBeGreaterThan(0);
  });

  test('should search input field change', () => {
    wrapper.find('#autocomplete-input').simulate('change', {
      preventDefault() {},
      target: {
        value: 'this is us'
      }
    });
    expect(handleSearchInputSpy).toBeCalled();
  });
});
