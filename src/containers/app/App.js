import './App.css';
import Login from '../login/Login.jsx'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Login/>
      </Route>
    </Router>
  );
}

export default App;
