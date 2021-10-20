import { PageContainer } from "../../shared/PageContainer"
import MyTitle from "../../shared/MyTitle"
import { ExitHeader } from "./TransactionExitStyle"
import { FormContainer } from "../../shared/FormContainer"
import api from "../../../services/mywallet-api"
import UserContext from '../../../contexts/UserContext'
import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import MyInput from "../../shared/MyInput"

export default function TransactionExitPage() {

    const initialInputValues = {
        value: "",
        description: ""
    }

    const [inputValues, setInputValues] = useState(initialInputValues);
    const { user } = useContext(UserContext)
    const history = useHistory();

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

    function sendExit(e) {
        e.preventDefault();

        const body = {
            ...inputValues,
            entry: false,
            clientId: user.id
        }

        api.sendExit(body)
        .then(res => {
            alert('saída registrada com sucesso')
            history.push('/home')
        })
        .catch(err => {
            console.log(err.response)
            alert('deu ruim  ' + err.response.data)
        })
    }


    return (
        <PageContainer>
            <ExitHeader>
                <MyTitle text="Nova saída"/>
            </ExitHeader>

            <FormContainer onSubmit={e => sendExit(e)}>
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