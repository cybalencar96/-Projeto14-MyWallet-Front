import { PageContainer } from "../../shared/PageContainer"
import { RegisterContainer } from "./RegisterStyle"
import { FormContainer } from "../../shared/FormContainer"
import MyTitle from "../../shared/MyTitle"
import MyInput from "../../shared/MyInput";
import { Link,useHistory } from 'react-router-dom'
import { useState } from "react";
import api from "../../../services/mywallet-api"
import Swal from 'sweetalert2'

export default function RegisterPage() {

    const initialInputValues = {
        name: "", 
        email: "", 
        password: "", 
        confirmPassword: ""
    }

    const [inputValues, setInputValues] = useState(initialInputValues);
    const history = useHistory();

    function changeInput(event,inputType) {
        event.preventDefault();
        switch (inputType) {
            case "name":
                setInputValues({...inputValues, name: event.target.value })
                break;

            case "email":
                setInputValues({...inputValues, email: event.target.value})
                break;

            case "password":
                setInputValues({...inputValues, password: event.target.value})
                break;

            case "confirmPassword":
                setInputValues({...inputValues, confirmPassword: event.target.value})
                break;
        }
    }

    function signUp(e) {
        e.preventDefault();

        api.signUp(inputValues)
        .then(res => {
            history.push('/')
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data,
                footer: '<a href="">Why do I have this issue?</a>'
              })
        })
    }

    return (
        <PageContainer centralized>
            <RegisterContainer>
                <MyTitle type="login" text="MyWallet"/>

                <FormContainer onSubmit={e => signUp(e)}>
                    <MyInput 
                        placeholder="Nome" 
                        onChange={e => changeInput(e,"name")} 
                        value={inputValues.nome}
                        required
                    />
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

                    <MyInput 
                        placeholder="Confime a senha" 
                        onChange={e => changeInput(e,"confirmPassword")} 
                        value={inputValues.confirmPwd}
                        required
                        type="password"
                    />
                    <button className="submit-button" type="submit">Salvar</button>
                </FormContainer>


                <Link className="to-login" to="/">Já tem uma conta? Entre agora!</Link>
            </RegisterContainer>
        </PageContainer>
    )
}

const regexEmail = '^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$'