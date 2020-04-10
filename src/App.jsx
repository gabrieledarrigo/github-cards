import React, { useState } from 'react';
import UserCard from './components/user-card/UserCard';
import getUser from './services/users';
import './App.css';
import Button, { ButtonType } from './components/button/Button';

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');

  const usernameHandler = ({ target }) => {
    setUsername(target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
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
        <form onSubmit={submitHandler}>
          <input
            name="github-user"
            type="text"
            placeholder="Insert a valid Github username"
            value={username}
            onChange={usernameHandler}
          />
          <Button type={ButtonType.SUBMIT}>
            Search
          </Button>
        </form>
      </div>

      <div className="App-content">
        {
          user && (
            <UserCard {...{
              ...user,
              avatarUrl: user.avatar_url,
              publicGists: user.public_gists,
              publicRepos: user.public_repos,
            }}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
