import './App.css';
import Login from '../login/Login.jsx'
import Signin from '../signin/Signin'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { PUBLIC } from '../../constants/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={PUBLIC.LOGIN}>
          <Login/>
        </Route>
        <Route path="/signin">
          <Signin/>
        </Route>
        {/* <Route path="/forgot-password">
            
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
