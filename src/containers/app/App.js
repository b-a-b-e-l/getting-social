import './App.css';
import Login from '../login/Login'
import Signin from '../signin/Signin'
import ForgotPassword from '../forgot-password/ForgotPassword'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { PUBLIC } from '../../constants/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={PUBLIC.LOGIN}>
          <Login/>
        </Route>
        <Route path={PUBLIC.SIGN_IN}>
          <Signin/>
        </Route>
        <Route path={PUBLIC.FORGOT_PASSWORD}>
          <ForgotPassword/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
