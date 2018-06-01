import React from 'react';
import { mount, shallow } from 'enzyme';
import { EventModal } from '../../../src/components/modals/EventModal.jsx';
import { createEventRequest } from '../../../src/actions/events-actions/index';

let wrapper, instance, mounted;
let store, props;

const getComponent = () => {
  if (!mounted) {
    props = {
      activeCenter: { center: { id: 3, title: 'this is me' } },
      event: { eventCreated: false },
      actUser: { isAuthenticated: true, user: { id: 3 } },
      bookedCenter: true,
      centerIsBooked: true,
      editEvent: true,
      eventToEdit: {
        title: 'we put the goog in the good life',
        img_url: '',
        startDate: new Date() + 10,
        endDate: new Date() + 20,
        description: 'we put the goog in the good life'
      },
      centerIsBooked: true,
      createEventRequest
    };
    mounted = shallow(<EventModal {...props} />);
  }
  return mounted;
};

describe('EventModal component', () => {
  beforeEach(() => {
    wrapper = getComponent();
    Materialize.toast = jest.fn();
  });

  test('component should mount', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('component should receive props and update state', () => {
    wrapper.instance().componentWillReceiveProps(props);
    expect(wrapper.state('isLoading')).toBeFalsy();
  });

  test('should startDate field change', () => {
    let e = {};
    wrapper.instance().handleChangeStartDate(e, new Date() + 10);
    expect(Materialize.toast).toBeCalled();
  });

  test('should endDate field change', () => {
    let e = {};
    wrapper.instance().handleChangeEndDate(e, new Date() + 20);
    expect(Materialize.toast).toBeCalled();
  });

  test('should open modal', () => {
    wrapper.find('#openBookCenter').simulate('click');
    expect(wrapper.state('open')).toBeTruthy();
  });

  test('should title input field change', () => {
    wrapper.find('#event_title').simulate('change', {
      target: {
        name: 'title',
        value: 'this is us'
      }
    });
    expect(wrapper.state('title')).toBe('this is us');
  });

  test('should description input field change', () => {
    wrapper.setState({
      errors: {
        description: 'this field is required'
      }
    });
    wrapper.find('#description').simulate('change', {
      target: {
        name: 'description',
        value: 'a brief description of this center'
      }
    });
    expect(wrapper.state('description'))
      .toBe('a brief description of this center');
  });

  test('should close modal', () => {
    wrapper.instance().handleClose();
    expect(wrapper.state('open')).toBeFalsy();
  });

  test('should toggle event privacy', () => {
    wrapper.setState({ private: true });
    wrapper.instance().handleToggleChange({});
    expect(wrapper.state('private')).toBeFalsy();
  });

  test('should be able to upload files not to large', () => {
    let e = {
      target: {
        files: [{ size: '10000', type: 'image/jpeg' }]
      }
    };
    wrapper.instance().onFileChange(e);
    expect(wrapper.state('img_url')).toBeTruthy();
  });

  test('should be able to upload files thats too large', () => {
    let e = {
      target: {
        files: [{ size: '30000000', type: 'image/jpeg' }]
      }
    };
    wrapper.instance().onFileChange(e);
    expect(Materialize.toast).toBeCalled();
  });

  test('should be able to upload files thats not an image file', () => {
    Materialize.toast = jest.fn();
    let e = {
      target: {
        files: [{ size: '30000000', type: 'text/javascript' }]
      }
    };
    wrapper.instance().onFileChange(e);
    expect(Materialize.toast).toBeCalled();
  });

  test('should be able to submit the form', () => {
    let e = {
      preventDefault() {},
    };
    wrapper.instance().handleEventSubmit(e);
    expect(wrapper.state('isLoading')).toBeTruthy();
  });
});
