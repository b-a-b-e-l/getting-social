import { Box, Typography, Grid, Link } from '@material-ui/core';
import StyledIcon from './StyledIcon.jsx';
import { Link as RouterLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const LoginTemplate = ({children, title, subtitle, leftLink, rightLink}) => {
return <Box alignItems="center" minHeight="100vh" display="flex" 
flexDirection="column" justifyContent="center">
    <Box marginBottom="1em" display="flex" flexDirection="column" justifyContent="center">
    < StyledIcon fill="#13DF7D"/>
    < Typography variant="h2" color="primary" > {title} </Typography>
    < Typography variant="body1" > {subtitle} </Typography>
    </Box>
{children}
    <Grid container direction="row" justify="space-between" alignItems="flex-start" >
      <Router>
    <div>
         <Link href={leftLink[1]} variant="body2"> {leftLink[0]} </Link>
    </div>
    <div>
      <Link component={rightLink[1]} to={rightLink[1]} variant="body2">{rightLink[0]}</Link>
    </div>
    </Router>
    </Grid>
</Box>
}

export default LoginTemplate