import React, { useState, useEffect } from 'react';
import './App.css';
import { getUser } from './services/users';
import UserCard from './components/user-card/UserCard';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const user = await getUser('gabrieledarrigo');
      setUser(user);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Github cards
      </header>
      <div>
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
