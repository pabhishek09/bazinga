import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';
import './style.css';
import Swimlane from './swimlane';
import Team from './team';

function Project() {

  let match = useRouteMatch();
  let { projectId } = useParams();

  return (
    <div>
      <h1>Project Id: {projectId}</h1>
      <div class='description'>
        <h3>Project description</h3>
      </div>
      <ul>
        <li>
          <Link to={`${match.url}/swimlane`}>
            Swimlane
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/team`}>
            Team
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/swimlane`}>
          <Swimlane />
        </Route>
        <Route path={`${match.path}/team`}>
          <Team />
        </Route>
        <Route path={match.path}>
          <h3>Default project view</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default Project;
