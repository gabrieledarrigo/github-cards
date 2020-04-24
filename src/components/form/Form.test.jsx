import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Form onSubmit={() => {}}>
          <div />
        </Form>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should invoke onSubmit function when a user submits the form', () => {
    const onSubmit = jest.fn();
    const preventDefault = jest.fn();
    const wrapper = shallow(
      <Form onSubmit={onSubmit}>
        <div>form</div>
      </Form>,
    );

    wrapper.find('form').simulate('submit', {
      preventDefault,
    });

    expect(onSubmit).toHaveBeenCalled();
  });
});
