import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

export const InputType = {
  TEXT: 'text',
  SEARCH: 'search',
};

export default function Input({
  name,
  type,
  value,
  placeholder,
  required,
  onChange,
  ...rest
}) {
  return (
    <input
      className={styles.input}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={onChange}
      {...rest}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    InputType.TEXT,
  ]).isRequired,
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
