import styled from "styled-components";
import MyInput from "./MyInput";
import { useState } from "react";

export default function MyForm({type, buttonText}) {
    const initialInputValues = {
        name: "", 
        email: "", 
        password: "", 
        confirmPwd: "",    
        value: "", 
        description: ""
    }

    const [inputValues, setInputValues] = useState(initialInputValues);

    function sendForm() {
        alert('Vai enviar o form')
    }

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

            case "confirmPwd":
                setInputValues({...inputValues, confirmPwd: event.target.value})
                break;
        }
    }

    return (
        <FormContainer onSubmit={sendForm}>
            {type === 'login' ? <LoginInputs changeInput={changeInput} inputValues={inputValues}/> : ""}
            {type === 'register' ? <RegisterInputs changeInput={changeInput} inputValues={inputValues}/> : ""}
            {type === 'transaction' ? <TransactionInputs changeInput={changeInput} inputValues={inputValues}/> : ""}
            
            <button className="submit-button" type="submit">{buttonText ? buttonText : "Entrar"}</button>
        </FormContainer>
    )
}

const FormContainer = styled.form`
    .submit-button {
        background-color: #A328D6;
        border-radius: 5px;
        border: none;
        height: 46px;

        width: 100%;
        display:flex;
        justify-content:center;
        align-items:center;

        color: white;
        font-weight: 700;
        font-size: 20px;
    }
`

const regexEmail = '^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$'

function LoginInputs({changeInput, inputValues}) {
    return (
        <>
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
        </>
    )
}

function RegisterInputs({changeInput,inputValues}) {
    return (
        <>
            <MyInput 
                placeholder="Nome" 
                onChange={e => changeInput(e,"nome")} 
                value={inputValues.nome}
                required
                pattern={regexEmail}
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
                onChange={e => changeInput(e,"confirmPwd")} 
                value={inputValues.confirmPwd}
                required
                type="password"
            />
        </>
    )
}


function TransactionInputs({changeInput, inputValues}) {
    return (
        <>
            <MyInput 
                placeholder="Valor" 
                onChange={e => changeInput(e,"value")} 
                value={inputValues.value}
                required
            />
            <MyInput 
                placeholder="Descrição" 
                onChange={e => changeInput(e,"description")} 
                value={inputValues.description}
                required
            />
        </>
    )
}



