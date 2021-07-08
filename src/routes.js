import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage';
function Routes(props) {
  return (
      <Router>
          <Switch>
              <Route exact path='/' component={HomePage}/>
          </Switch>
      </Router>
  );
}

export default Routes;