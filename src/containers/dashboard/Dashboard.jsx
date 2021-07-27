import { USERS_VALUES } from '../../constants/localStorage'

const storedUser = JSON.parse(localStorage.getItem([USERS_VALUES]))

const Dashboard = () => {
    
    return (
        <div>
            <h1>Welcome {storedUser[0].email}</h1>
        </div>
    )
}

export default Dashboard;