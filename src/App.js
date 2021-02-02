import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Project from './pages/project';

function App() {

  const projectId = 'project-1234';

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={`/project/${projectId}`}>Project</Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`/project/:projectId`}>
            <Project />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
