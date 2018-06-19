import React from 'react';
import { shallow, mount } from 'enzyme';
import { MyEventCardHolder } from
  '../../../src/components/bodyComponents/MyEventCardHolder';
import {
  fetchEventRequest,
  loadMoreEvents,
  fetchSessionEventRequest
} from './../../../src/actions/events-actions';

let wrapper, instance, mounted;
let store, componentProps;

const getComponent = (props) => {
  mounted = shallow(<MyEventCardHolder {...props} />);
  return mounted;
};

let componentDidMountSpy = jest
  .spyOn(MyEventCardHolder.prototype, 'componentDidMount');
let loadMoreSpy = jest
  .spyOn(MyEventCardHolder.prototype, 'loadMore');

describe('MyEventCardHolder component', () => {
  test('should mount', () => {
    componentProps = {
      fetchSessionEventRequest,
      activeUser: {
        isAuthenticated: true,
        user: { id: 1 }
      }
    };
    wrapper = getComponent(componentProps);
    expect(wrapper).toMatchSnapshot();
    expect(componentDidMountSpy).toBeCalled();
  });

  test('should update when props change', () => {
    wrapper = getComponent(componentProps);
    let newProps = {
      allEvents: {
        sessEvents: {
          meta: {
            page: 1,
            pageCount: 2,
            pageSize: 5,
            totalCount: 5,
            loadingmore: false,
            loadmore: true
          },
          events: [{ id: 1, title: 'one event' }, { id: 2, title: 'two event' }]
        }
      }
    };
    wrapper.setProps(newProps);
    expect(wrapper.state('isLoading')).toBeFalsy();
  });

  test('should set isLoading state to false if there are no events', () => {
    wrapper = getComponent(componentProps);
    let newProps = {
      allEvents: {
        sessEvents: {
          events: []
        }
      }
    };
    wrapper.setProps(newProps);
    expect(wrapper.state('isLoading')).toBeFalsy();
  });

  test('when loadmore button is clicked', () => {
    wrapper = getComponent(componentProps);
    let newProps = {
      loadMoreEvents,
      allEvents: {
        sessEvents: {
          events: []
        }
      }
    };
    wrapper.setProps(newProps);
    wrapper.instance().loadMore();
    expect(loadMoreSpy).toBeCalled();
  });
});
