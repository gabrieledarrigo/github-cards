import React, { useState } from 'react';
import UserCard from './components/user-card/UserCard';
import getUser from './services/users';
import UserForm from './components/user-form/UserForm';
import styles from './App.module.css';

function App() {
  const [user, setUser] = useState(null);

  const onSubmit = async ({ username }) => {
    setUser(await getUser(username));
  };

  return (
    <div className={styles.app}>
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
    </div>
  );
}

export default App;
