import { TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import ButtonCentered from '../../../components/ButtonCentered';
import { useState } from 'react';

export default function LoginForm (){
  const [user, setUser] = useLocalState({email:'', password:''})

  function useLocalState(user) {
    
  }


  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    }) 
  }
    const handleSubmitLogin = event => {
      event.preventDefault()
      console.log(user)
    }

  return (
  <form 
  autoComplete="off"
  >
        <TextField 
        name="email"
        value={user.email}
        label="email" 
        type="email" 
        variant="outlined" 
        placeholder="email@domain.com" 
        onChange={handleChange}
        fullWidth 
        style={{ 
          marginBottom: "1em" 
        }}/>
        <TextField 
        name="password" 
        label="password" 
        type="password"
        value={user.password}
        variant="outlined" 
        placeholder="*******"
        onChange={handleChange}
        fullWidth 
        style={{ 
          marginBottom: "1em" 
          }}/>
        <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Stay logged in"
          />
        <ButtonCentered>
          <Button 
          variant="contained" 
          color="primary"
          onClick={handleSubmitLogin}
          > 
          Submit 
          </Button>
        </ButtonCentered>
    </form>
  )
}