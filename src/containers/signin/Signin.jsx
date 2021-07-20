import LoginForm from '../login/components/LoginForm.jsx';
import LoginTemplate from "../../components/LoginTemplate";
import { PUBLIC } from '../../constants/routes'

export default function Signin() {
    return (
        <LoginTemplate 
        subtitle="Welcome! Please create an account to start."
        leftLink={{ label:"Already have an account? Log in here", to: PUBLIC.LOGIN }}         
        >
        < LoginForm />
        </LoginTemplate>
    )
}