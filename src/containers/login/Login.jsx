import { useState } from 'react';
import LoginForm from './components/LoginForm.jsx';
import LoginTemplate from "../../components/LoginTemplate"
import { PUBLIC } from '../../constants/routes'
import { USERS_VALUES } from '../../constants/localStorage'
import { useHistory } from 'react-router-dom';

export default function Login() {
    const storedUser = JSON.parse(localStorage.getItem([USERS_VALUES]))
    const [user, setUser] = useState('')
    const history = useHistory()

    // function emailMatches(email) {
    //     return storedUser.email === email;
    //   }

    const emailMatches = storedUser.find(function(email) {
        if(storedUser.email == email)
            return true;
    })

    const handleChange = attribute => {
        return (event) => {
            setUser({
                ...user,
                [attribute]: event.target.value,
            }) 
        }
    }
    console.log(user.email)
    console.log(user.password)

    const handleSubmitLogin = event => {
      event.preventDefault();
      if (emailMatches && user.password == storedUser[0].password) {
          history.push("/dashboard")
      } else {
          alert("email and password don't match")
      }
    }

    const handleChangeEmail = handleChange('email')
    const handleChangePassword = handleChange('password')

  
    return (
        <LoginTemplate title="Getting Social" subtitle="Nice to see you around here! 
        Please log in first." 
            leftLink={{ label:"Forgot password?", to: PUBLIC.FORGOT_PASSWORD }} 
            rightLink={{ label:"First time here? Sign in", to: PUBLIC.SIGN_IN }}
        >
            <LoginForm 
                onChangeEmail={handleChangeEmail} 
                onChangePassword={handleChangePassword} 
                onClickSubmit={handleSubmitLogin}
                email={user.email}
                password={user.password}
            />
        </LoginTemplate>
    )}