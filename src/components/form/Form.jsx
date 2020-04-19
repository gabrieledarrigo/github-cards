import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ onSubmit, children, ...rest }) {
  return (
    <form
      {...rest}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
