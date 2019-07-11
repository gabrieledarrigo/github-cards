import React, { useState } from 'react';
import UserCard from './components/user-card/UserCard';
import { getUser } from './services/users';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');

  const usernameHandler = ({ target }) => {
    setUsername(target.value);
  };

  const submitHandler = async () => {
    const user = await getUser(username);
    setUser(user);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          Github cards
        </h1>
      </header>

      <div className="App-content">
        <input
          name="github-user"
          type="text"
          placeholder="Insert a valid Github username"
          value={username}
          onChange={usernameHandler}
        />
        <button onClick={submitHandler}>
          Submit
        </button>
      </div>
    
      <div className="App-content">
        {
          user && (
            <UserCard {...user} />
          )
        }
      </div>
    </div>
  );
}

export default App;
