import LoginForm from './components/LoginForm.jsx';
import LoginTemplate from "../../components/LoginTemplate"
import { PUBLIC } from '../../constants/routes'

export default function Login() {
  
    return (
        <LoginTemplate title="Getting Social" subtitle="Nice to see you around here! 
        Please log in first." 
            leftLink={{ label:"Forgot password?" }} 
            rightLink={{ label:"First time here? Sign in", to: PUBLIC.SIGN_IN }}
        >
            < LoginForm />
        </LoginTemplate>
    )}