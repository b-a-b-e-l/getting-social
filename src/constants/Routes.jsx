import { Route, Switch } from 'react-router-dom';
import Login from "../containers/login/Login"

const Routes = 
    <Switch>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/signin">
        <Signin/>
        </Route>
        <Route path="/forgot-password">
            
        </Route>
    </Switch>

