import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input';
import Button, { ButtonType } from '../button/Button';
import styles from './UserForm.module.css';

export default function UserForm({
  initialValues,
  onSubmit,
}) {
  const [username, setUsername] = useState(initialValues ? initialValues.username : '');

  const onChange = useCallback(({ target }) => {
    setUsername(target.value);
  }, []);

  const internalOnSubmit = useCallback((e) => {
    e.preventDefault();
    onSubmit({ username });
  }, [onSubmit, username]);

  return (
    <form
      className={styles.form}
      onSubmit={internalOnSubmit}
    >
      <div className={styles.inputGroup}>
        <Input
          name="username"
          type="text"
          placeholder="Your GitHub username"
          value={username}
          onChange={onChange}
          required
        />
        <Button type={ButtonType.SUBMIT}>
          Search
        </Button>
      </div>
    </form>
  );
}

UserForm.propTypes = {
  initialValues: PropTypes.shape({
    username: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

UserForm.defaultProps = {
  initialValues: null,
};
