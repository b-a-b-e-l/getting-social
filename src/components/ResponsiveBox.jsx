import React from 'react';
import { 
   compose, 
   spacing, 
   palette, 
   breakpoints, 
   sizing, 
   borders,
   display,
   flexbox,
   positions,
   shadows
} from '@material-ui/system';
import styled from 'styled-components';

const ResponsiveBox = styled.div`
   ${
   breakpoints (
      compose(
         palette,
         spacing,
         sizing,
         display,
         flexbox,
         positions,
         shadows,
         borders
      )
   )
   }
`

export default ResponsiveBox


