import { TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import ButtonCentered from '../../../components/ButtonCentered';

const LoginForm = (props) => {
  
  const { 
    onChangeEmail, 
    onChangePassword,
    onClickSubmit,
    email,
    password,
  } = props

  return (
  <form 
    autoComplete="off"
  >
        <TextField 
        name="email"
        value={email}
        label="email" 
        type="email" 
        variant="outlined" 
        placeholder="email@domain.com" 
        onChange={onChangeEmail}
        fullWidth 
        style={{ 
          marginBottom: "1em" 
        }}/>
        <TextField 
        name="password" 
        label="password" 
        type="password"
        value={password}
        variant="outlined" 
        placeholder="*******"
        onChange={onChangePassword}
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
            onClick={onClickSubmit}
          > 
          Submit 
          </Button>
        </ButtonCentered>
    </form>
  )
}

export default LoginForm;