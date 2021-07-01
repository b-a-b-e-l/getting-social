import { Box , Typography, Link } from '@material-ui/core';

import LoginForm from './components/LoginForm.jsx';
import LoginTemplate from "../../components/LoginTemplate"


export default function Login() {
  
    return (
        <LoginTemplate title="Getting Social" subtitle="Nice to see you around here! 
        Please log in first.">
            < LoginForm />
            <div>
            <Link href="#" variant="body2"> Forgot password? </Link>
            </div>
            <div>
            <Link href="#" variant="body2"> First time here? Sign in</Link>
            </div>
        </LoginTemplate>
    )}