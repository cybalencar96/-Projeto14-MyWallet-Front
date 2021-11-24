import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginPage from './components/pages/Login/LoginPage'
import RegisterPage from './components/pages/Register/RegisterPage'
import HomePage from './components/pages/Home/HomePage'
import UserContext from './contexts/UserContext'
import { useState } from 'react'
import ProtectedRoute from './components/shared/ProtectedRoute'
import TransactionPage from './components/pages/Transaction/TransactionPage'

export default function App() {
    const [user, setUser] = useState('')
    return (
        <UserContext.Provider value={{user,setUser}}>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <LoginPage />
                    </Route>

                    <Route path="/register" exact>
                        <RegisterPage />
                    </Route>

                    <Route path="/home" exact>
                        <ProtectedRoute>
                            <HomePage />
                        </ProtectedRoute>
                    </Route>

                    <Route path="/transaction/entry" exact>
                        <ProtectedRoute>
                            <TransactionPage />
                        </ProtectedRoute>
                    </Route>

                    <Route path="/transaction/exit" exact>
                        <ProtectedRoute>
                            <TransactionPage />
                        </ProtectedRoute>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    )
}