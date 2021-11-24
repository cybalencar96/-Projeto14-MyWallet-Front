import { useContext, useEffect } from "react";
import { Redirect,  } from "react-router-dom"
import UserContext from "../../contexts/UserContext";
import api from "../../services/mywallet-api";

export default function ProtectedRoute({children}) {
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    const {setUser} = useContext(UserContext);

    useEffect(() => {
        if (userToken) {
            api.getUserInfo(userToken.token)
            .then(res => setUser({token: userToken.token, ...res.data}))
            .catch(err => console.error(err))
        }
    }, []);

    return userToken ? children : <Redirect to='/'/>
}