import LoginForm from '../login/components/LoginForm.jsx';
import LoginTemplate from "../../components/LoginTemplate"


export default function Signin() {
    // rightLink={["Already have an account? Log in here", "#"]}
    return (
        <LoginTemplate title="Getting Social" subtitle="Welcome! Please create an account to start." >
            < LoginForm />
        </LoginTemplate>
    )
}