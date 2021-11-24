import { PageContainer } from "../../shared/PageContainer"
import { LoginContainer } from "./LoginStyle"
import { FormContainer } from "../../shared/FormContainer"
import MyTitle from "../../shared/MyTitle"
import MyInput from "../../shared/MyInput";
import { Link,useHistory } from 'react-router-dom'
import { useState, useContext, useEffect } from "react";
import UserContext from "../../../contexts/UserContext";
import api from "../../../services/mywallet-api"
import Swal from "sweetalert2";
import { ButtonLoading } from '../../shared/Loading';

export default function LoginPage() {
    const { setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    const initialInputValues = {
        email: "", 
        password: "", 
    }

    const [inputValues, setInputValues] = useState(initialInputValues);
    const history = useHistory();

    useEffect(() => {
        const userToken = localStorage.getItem('userToken')
        if (userToken) {
            setUser(JSON.parse(userToken))
            history.push('/home')
        }
    },[]);
    
    function changeInput(event,inputType) {
        event.preventDefault();
        switch (inputType) {
            case "email":
                setInputValues({...inputValues, email: event.target.value})
                break;

            case "password":
                setInputValues({...inputValues, password: event.target.value})
                break;
        }
    }

    function signIn(e) {
        setLoading(true);
        e.preventDefault();
        
        api.signIn(inputValues)
        .then(res => {
            setUser(res.data)
            console.log(res.data)
            localStorage.setItem('userToken', JSON.stringify(res.data))
            history.push('/home')
        })
        .catch(err => {
            if (err.response.status === 401) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email or password invalid...',
                  })
            }
            setLoading(false);
        });
    }

    return (
        <PageContainer centralized>
            <LoginContainer>
                <MyTitle type="login" text="MyWallet"/>

                <FormContainer onSubmit={e => signIn(e)}>
                <MyInput 
                    placeholder="E-mail" 
                    onChange={e => changeInput(e,"email")} 
                    value={inputValues.email}
                    required
                    pattern={regexEmail}
                />
                <MyInput 
                    placeholder="Senha" 
                    onChange={e => changeInput(e,"password")} 
                    value={inputValues.password}
                    required
                    type="password"
                />
                    <button className="submit-button" type="submit">{loading ? <ButtonLoading /> : 'Entrar'}</button>
                </FormContainer>

                <Link className="to-register" to="/register">Primeira vez? Cadastre-se já!</Link>
            </LoginContainer>
        </PageContainer>
    )
}

const regexEmail = '^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$'
