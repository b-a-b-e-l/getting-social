import { AUTHENTICATED_USER } from '../../constants/localStorage'
import { PUBLIC } from '../../constants/routes'
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import BarHomeIcon from '../../components/BarHomeIcon';
import { Name } from "../../constants/name"


const Dashboard = () => {
    const history = useHistory()
    
    if (AUTHENTICATED_USER.length) {
    return (
        <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="#FFF" aria-label="menu">
              <BarHomeIcon />
            </IconButton>
            <Typography variant="h6">
            {Name} 
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
} else {
    history.push(PUBLIC.LOGIN)
    return (
        null
    )
}
}

export default Dashboard;