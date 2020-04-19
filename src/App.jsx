import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserCard from './components/user-card/UserCard';
import { getUser } from './services/github';
import UserForm from './components/user-form/UserForm';
import styles from './App.module.css';
import TrendingDevelopers from './components/trending-developers/TrendingDevelopers';

function App({
  match,
  history,
}) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);

    async function fetch() {
      const { params: { username } } = match;

      if (username) {
        try {
          const result = await getUser(username);
          setUser(result);
        } catch (err) {
          setError(err);
          setUser(undefined);
        }
      }
    }

    fetch();
  }, [match]);

  const onSubmit = async ({ username }) => {
    history.push(`/${username}`);
  };

  return (
    <section className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          GitHub Cards
        </h1>
        <h2 className={styles.subtitle}>
          Create your personal GitHub Card
        </h2>
      </header>

      <div className={styles.content}>
        <UserForm onSubmit={onSubmit} />

        {error && (
          <div className={styles.error}>
            <span
              role="img"
              aria-label="Error"
            >
              ❌
            </span>
            {' '}
            Your user cannot be found. Please retry!
          </div>
        )}
      </div>

      <div className={styles.content}>
        {user && (
          <UserCard {...{
            ...user,
            avatarUrl: user.avatar_url,
            publicGists: user.public_gists,
            publicRepos: user.public_repos,
          }}
          />
        )}
      </div>

      <header className={styles.header}>
        <h2 className={styles.subtitle}>
          Discover trending developers
        </h2>
      </header>

      <div className={styles.content}>
        <TrendingDevelopers />
      </div>

      <footer className={styles.footer}>
        <p>
          Made with
          <span
            role="img"
            aria-label="Love"
          >
            ❤️
          </span>
          {' '}
          by
          {' '}
          <a
            href="https://www.github.com/gabrieledarrigo"
            title="@gabrieledarrigo"
          >
            @gabrieledarrigo
          </a>
        </p>
      </footer>
    </section>
  );
}

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string,
    }),
  }),
};

App.defaultProps = {
  match: {
    params: {
      username: null,
    },
  },
};

export default App;
