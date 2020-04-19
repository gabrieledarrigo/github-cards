import React from 'react';
import { shallow, mount } from 'enzyme';
import UserForm from './UserForm';
import Input from '../input/Input';

describe('UserForm', () => {
  it('should accept an initialValues object with a username property', () => {
    const wrapper = shallow(
      <UserForm
        initialValues={{ username: 'foo' }}
        onSubmit={() => {}}
      />,
    );

    expect(wrapper.find(Input).filter({ name: 'username' }).prop('value')).toEqual('foo');
  });

  it('should invoke the onSumbit callback when a user submit the form', () => {
    const onSubmit = jest.fn();
    const preventDefault = jest.fn();

    const wrapper = mount(
      <UserForm
        onSubmit={onSubmit}
      />,
    );

    wrapper.find(Input).filter({ name: 'username' }).simulate('change', {
      target: {
        value: 'bar',
      },
    });

    wrapper.find('form').simulate('submit', {
      preventDefault,
    });

    expect(onSubmit).toHaveBeenCalledWith({ username: 'bar' });
    expect(preventDefault).toHaveBeenCalled();
  });
});
