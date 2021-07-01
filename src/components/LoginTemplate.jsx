import { Box, Typography } from '@material-ui/core';
import StyledIcon from './StyledIcon.jsx';


const LoginTemplate = ({children, title, subtitle}) => {
return <Box alignItems="center" minHeight="100vh" display="flex" 
flexDirection="column" justifyContent="center">
    <Box marginBottom="1em" display="flex" flexDirection="column" justifyContent="center">
    < StyledIcon fill="#13DF7D"/>
    < Typography variant="h2" color="primary" > {title} </Typography>
    < Typography variant="body1" > {subtitle} </Typography>
    </Box>
{children}
</Box>
}

export default LoginTemplate