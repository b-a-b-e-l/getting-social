import LoginForm from './components/LoginForm.jsx';
import LoginTemplate from "../../components/LoginTemplate"


export default function Signin() {
  
    return (
        <LoginTemplate title="Getting Social" subtitle="Welcome! Please create an account to start." rightLink={["Already have an account? Log in here", "#"]}>
            < LoginForm />
        </LoginTemplate>
    )}