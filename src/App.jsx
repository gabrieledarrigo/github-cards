import React, { useState } from 'react';
import UserCard from './components/user-card/UserCard';
import getUser from './services/users';
import UserForm from './components/user-form/UserForm';
import styles from './App.module.css';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async ({ username }) => {
    setError(null);

    try {
      const result = await getUser(username);
      setUser(result);
    } catch (err) {
      setError(err);
    }
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

export default App;
