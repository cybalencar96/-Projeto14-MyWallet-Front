import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginPage from './components/pages/Login/LoginPage'
import RegisterPage from './components/pages/Register/RegisterPage'
import HomePage from './components/pages/Home/HomePage'

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