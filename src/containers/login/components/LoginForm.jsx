import { TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import ResponsiveBox from "../../../components/ResponsiveBox"


export default function LoginForm (){
  return (
<ResponsiveBox sm={{ maxWidth: "20px" }} md={{ maxWidth:"100px" }} color="white" bgcolor="palevioletred">
  <form  autoComplete="off">
        <TextField id="outlined-basic" label="email" variant="outlined" placeholder="email@domain.com" fullWidth style={{ marginBottom: "1em" }} />
        <TextField id="outlined-basic" label="password" variant="outlined" placeholder="*******" fullWidth style={{ marginBottom: "1em" }}/>
        <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Stay logged in"
          />
        <Button variant="contained" color="primary"> Log in </Button>
    </form>
  </ResponsiveBox>
  )
}