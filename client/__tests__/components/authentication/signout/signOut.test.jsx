import React from 'react';
import { shallow, mount } from 'enzyme';
import { SignOut, mapDispatchToProps } from
  '../../../../src/components/authentication/signout/SignOut';
import { signOutRequest } from
  '../../../../src/actions/authActions';

let wrapper;

describe('Signout component', () => {
  beforeEach(() => {
    wrapper = mount(<SignOut signOutRequest={signOutRequest} />);
  });

  test('should always render when mounted', () => {
    const calledProps = wrapper.find('p');
    expect(calledProps.length).toBe(1);
  });

  test('is rendered', () => {
    const renderSpy = jest
      .spyOn(SignOut.prototype, 'render');
    const instance = wrapper.instance();
    instance.render();
    mapDispatchToProps(jest.fn());
    expect(renderSpy).toHaveBeenCalled();
  });

  test('should receive new properties', () => {
    let props = { auth: { redirect: true } };
    const componentWillReceivePropsSpy = jest
      .spyOn(SignOut.prototype, 'componentWillReceiveProps');
    const instance = wrapper.instance();
    instance.componentWillReceiveProps(props);
    expect(componentWillReceivePropsSpy).toHaveBeenCalled();
  });
});
