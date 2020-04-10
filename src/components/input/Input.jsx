import React from 'react';
import PropTypes from 'prop-types';

export const InputType = {
  TEXT: 'TEXT',
};

export default function Input({
  name,
  type,
  value,
  placeholder,
  required,
  onChange,
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([InputType.TEXT]).isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: null,
  required: false,
  onChange: () => {},
};
