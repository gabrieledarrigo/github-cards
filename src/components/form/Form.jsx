import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

export default function Form({ onSubmit, children, ...rest }) {
  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(e);
    },
    [onSubmit],
  );
  return (
    <form {...rest} onSubmit={handleFormSubmit}>
      {children}
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
