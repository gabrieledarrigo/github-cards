import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Input, { InputType } from './Input';

describe('Input', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <Input
        name="input-name"
        type={InputType.TEXT}
        value="A value"
        placeholder="This is the placeholder"
        onChange={() => {}}
        required
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should invoke onChange function when a user change input value', () => {
    const wrapper = shallow(
      <Input
        name="input-name"
        type={InputType.TEXT}
        value="A value"
        placeholder="This is the placeholder"
        onChange={() => {}}
        required
      />,
    );

    wrapper.simulate('change', {
      e: {
        target: {
          value: 'Changed value',
        },
      },
    });
  });
});
