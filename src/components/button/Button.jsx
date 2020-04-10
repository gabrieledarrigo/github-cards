import React from 'react';
import PropTypes from 'prop-types';

export const ButtonType = {
  BUTTON: 'button',
  SUBMIT: 'submit',
};

export default function Button({
  type,
  children,
  ...rest
}) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf([
    ButtonType.BUTTON,
    ButtonType.SUBMIT,
  ]),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
};
