import React from 'react';
import renderer from 'react-test-renderer';
import Button, { ButtonType } from './Button';

describe('Button', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <Button type={ButtonType.BUTTON}>
        A text
      </Button>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
