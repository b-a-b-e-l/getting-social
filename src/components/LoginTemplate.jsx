import { Box, Typography, Grid, Link } from '@material-ui/core';
import StyledIcon from './StyledIcon.jsx';
import ResponsiveBox from "./ResponsiveBox"
import Name from "../constants/Name"


const LoginTemplate = ({children, subtitle, leftLink, rightLink}) => {
return <Box alignItems="center" minHeight="100vh" display="flex" 
flexDirection="column" justifyContent="center">
  <ResponsiveBox sm={{ maxWidth:"100%" }} md={{ maxWidth:"55%" }}>
    <Box marginBottom="1em" display="flex" flexDirection="column" justifyContent="center">
    < StyledIcon fill="#13DF7D"/>
    < Typography variant="h2" color="primary" > <Name/> </Typography>
    < Typography variant="body1" > {subtitle} </Typography>
    </Box>
      {children}
    <Grid container direction="row" justify="space-between" alignItems="flex-start" >
      { !!leftLink.length && leftLink.map(({ label, to }) => 
      <div>
                  <Link to={to} variant="body2"> {label} </Link>
             </div>
             )
          }
         {
             !!rightLink.length ? rightLink.map(({ label, to }) => 
             <div>
                  <Link to={to} variant="body2"> {label} </Link>
             </div>
             )
             : null
          }
    </Grid>
    </ResponsiveBox>
</Box>

}

export default LoginTemplate