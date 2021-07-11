import LoginForm from './components/LoginForm.jsx';
import LoginTemplate from "../../components/LoginTemplate"


export default function Login() {
  
    return (
        <LoginTemplate title="Getting Social" subtitle="Nice to see you around here! 
        Please log in first." leftLink={{ label:"Forgot password?" , to:"#"}} rightLink={{ label:"First time here? Sign in", to:"Signin"}}>
            < LoginForm />
        </LoginTemplate>
    )}