import { Box, Typography, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import React from 'react';
import StyledIcon from './StyledIcon.jsx';
import PageContent from "./ResponsiveBox"
import { Name } from "../constants/name"
 

const LoginTemplate = ({children, subtitle, leftLink = {}, rightLink = {}}) => {

  const getHeader = () => (
    <Box 
      marginBottom="1em" 
      display="flex" 
      flexDirection="column" 
      justifyContent="center"
    >
      <StyledIcon fill="#13DF7D"/>
      <Typography variant="h2" color="primary" align='center'> 
        {Name} 
      </Typography>
      <Typography variant="body1" align='center'> 
        {subtitle} 
      </Typography>
    </Box>
  )

  return (
    <Box 
      width='100%'
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <PageContent 
        sm={{ maxWidth:"100%"}} 
        md={{ maxWidth:"55%" }}
      >

        {getHeader()}
        
        {children}

        <Grid 
          container 
          direction="row" 
          justify="space-between" 
          alignItems="flex-start"
        >
          {
            
          }
          { leftLink.hasOwnProperty('label') &&
              <div>
                <Link to={leftLink.to || '#'} variant="body2"> {leftLink.label} </Link>
              </div>
          }
          { 
            !!Object.keys(rightLink).length &&
              <div>
                <Link to={rightLink.to} variant="body2"> {rightLink.label} </Link>
              </div>
          }
        </Grid>
      </PageContent>
    </Box>

  )

}

export default LoginTemplate