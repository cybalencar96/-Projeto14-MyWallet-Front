import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginPage from './components/pages/Login/LoginPage'
import RegisterPage from './components/pages/Register/RegisterPage'
import HomePage from './components/pages/Home/HomePage'
import TransactionEntryPage from './components/pages/TransactionEntry/TransactionEntryPage'
import TransactionExitPage from './components/pages/TransactionExit/TransactionExitPage'
import UserContext from './contexts/UserContext'
import { useState } from 'react'

export default function App() {

    const [user, setUser] = useState('')
    return (
        <UserContext.Provider value={{user,setUser}}>
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

                    <Route path="/transaction/entry" exact>
                        <TransactionEntryPage/>
                    </Route>

                    <Route path="/transaction/exit" exact>
                        <TransactionExitPage/>
                    </Route>

                </Switch>
            </Router>
        </UserContext.Provider>
    )
}