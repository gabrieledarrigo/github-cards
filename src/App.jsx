import React, { useState } from 'react';
import UserCard from './components/user-card/UserCard';
import getUser from './services/users';
import UserForm from './components/user-form/UserForm';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const onSubmit = async ({ username }) => {
    setUser(await getUser(username));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          Github cards
        </h1>
      </header>

      <div className="App-content">
        <UserForm onSubmit={onSubmit} />
      </div>

      <div className="App-content">
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
