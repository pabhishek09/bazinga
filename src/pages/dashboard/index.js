import { useState, useEffect } from 'react';
import { authenticate } from '../../services/ghRequests';
import './style.css';

function Dashboard() {

  const [user, setUser] = useState({});

  useEffect(() => {
    console.log('Use Effect Hook');
    fetchGithubData();
  });

  function fetchGithubData() {
    // authenticate();
  }

  async function handleLogin() {
    window.location = 'https://github.com/login/oauth/authorize';
  }

  return (
    <div>
      <h1>Dasboard</h1>
        <button className="button" onClick={handleLogin}>Login</button>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default Dashboard;
