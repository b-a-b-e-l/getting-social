import { compose, spacing, palette, breakpoints, sizing } from '@material-ui/system';
import styled from 'styled-components';

const ResponsiveBox = styled.div`
 ${breakpoints (
 compose(
    palette,
    spacing,
    sizing
 )
 )
}
`

export default ResponsiveBox


