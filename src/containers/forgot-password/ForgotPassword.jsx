import { TextField, Button } from '@material-ui/core';
import LoginTemplate from "../../components/LoginTemplate"

export default function ForgotPassword() {
  
    return (
        <LoginTemplate title="Getting Social" subtitle="Nice to see you around here! 
        Please log in first." leftLink={["Forgot password?" , "#"]} rightLink={["First time here? Sign in", "Signin"]}>
            <TextField></TextField>
            <Button>Submit</Button>
        </LoginTemplate>

    )}