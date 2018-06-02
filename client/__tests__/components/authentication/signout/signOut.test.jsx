import React from 'react';
import { shallow } from 'enzyme';
import { SignOut, mapDispatchToProps } from
  '../../../../src/components/authentication/signout/signOut';
import { signOutRequest } from
  '../../../../src/actions/authActions';

let wrapper;

describe('SignOut component', () => {
  beforeEach(() => {
    wrapper = shallow(<SignOut signOutRequest={signOutRequest} />);
  });

  test('is rendered', () => {
    const renderSpy = jest
      .spyOn(SignOut.prototype, 'render');
    const instance = wrapper.instance();
    instance.render();
    mapDispatchToProps(jest.fn());
    expect(renderSpy).toHaveBeenCalled();
  });

  test('should call componentWillReceiveProps', () => {
    let props = { auth: { redirect: true } };
    const componentWillReceivePropsSpy = jest
      .spyOn(SignOut.prototype, 'componentWillReceiveProps');
    const instance = wrapper.instance();
    instance.componentWillReceiveProps(props);
    expect(componentWillReceivePropsSpy).toHaveBeenCalled();
  });
});
