import { PageContainer } from "../../shared/PageContainer"
import MyTitle from "../../shared/MyTitle"
import { ExitHeader } from "./TransactionExitStyle"
import { FormContainer } from "../../shared/FormContainer"
import api from "../../../services/mywallet-api"
import UserContext from '../../../contexts/UserContext'
import { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import MyInput from "../../shared/MyInput"
import Loading from "../../shared/Loading"
import Swal from "sweetalert2"

export default function TransactionExitPage() {

    const initialInputValues = {
        value: "",
        description: ""
    }

    const [inputValues, setInputValues] = useState(initialInputValues);
    const { user, setUser } = useContext(UserContext)
    const history = useHistory();

    useEffect(() => {
        const userToken = localStorage.getItem('userToken')
        if (userToken) {
            const {token} = JSON.parse(userToken)
            
            api.getUserInfo(token)
            .then(res => {
                setTimeout(() => setUser(res.data),500)
            })
            .catch(err => {
                localStorage.setItem('userToken','')
                history.push('/')
            })
        } else {
            history.push('/')
        }
        
    },[])

    function changeInput(event,inputType) {
        event.preventDefault();
        switch (inputType) {
            case "value":
                setInputValues({...inputValues, value: event.target.value })
                break;

            case "description":
                setInputValues({...inputValues, description: event.target.value})
                break;
        }
    }

    function sendTransaction(e) {
        e.preventDefault();

        const body = {
            ...inputValues,
            entry: false,
        }

        api.sendTransaction(user.token,body)
        .then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Yass',
                text: 'Exit registered successfully!!',
              })
            history.push('/home')
        })
        .catch(err => {
            console.log(err.response)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data,
              })
        })
    }

    if (!user) return (
        <Loading />
    )


    return (
        <PageContainer>
            <ExitHeader>
                <MyTitle text="Nova saída"/>
            </ExitHeader>

            <FormContainer onSubmit={e => sendTransaction(e)}>
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
                <button className="submit-button" type="submit">Salvar saída</button>
            </FormContainer>

        </PageContainer>
    )
}