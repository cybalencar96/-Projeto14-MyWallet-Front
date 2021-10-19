import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import HomePage from './pages/Home/HomePage'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <LoginPage/>
                </Route>

                <Route path="/register" exact>
                    <RegisterPage/>
                </Route>

                <Route path="/home" exact>
                    <HomePage/>
                </Route>
            </Switch>
        </Router>
        
    )
}