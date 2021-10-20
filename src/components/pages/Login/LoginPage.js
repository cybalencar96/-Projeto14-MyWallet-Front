import { PageContainer } from "../../shared/PageContainer"
import { LoginContainer } from "./LoginStyle"
import { FormContainer } from "../../shared/FormContainer"
import MyTitle from "../../shared/MyTitle"
import MyInput from "../../shared/MyInput";
import { Link,useHistory } from 'react-router-dom'
import { useState, useContext } from "react";
import UserContext from "../../../contexts/UserContext";
import api from "../../../services/mywallet-api"

export default function LoginPage() {

    const {setUser} = useContext(UserContext);

    const initialInputValues = {
        email: "", 
        password: "", 
    }

    const [inputValues, setInputValues] = useState(initialInputValues);
    const history = useHistory();

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
        e.preventDefault();

        api.signIn(inputValues)
        .then(res => {
            setUser(res.data)
            alert('login realizado com sucesso!')
            history.push('/home')
        })
        .catch(err => {
            console.log(err)
            alert('deu ruim' + "   " + err.response.data)
        })
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
                    <button className="submit-button" type="submit">Entrar</button>
                </FormContainer>

                <Link className="to-register" to="/register">Primeira vez? Cadastre-se já!</Link>
            </LoginContainer>
        </PageContainer>
    )
}

const regexEmail = '^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$'
