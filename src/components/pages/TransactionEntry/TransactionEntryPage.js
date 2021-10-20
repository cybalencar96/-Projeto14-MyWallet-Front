import { PageContainer } from "../../shared/PageContainer"
import MyTitle from "../../shared/MyTitle"
import { EntryHeader } from "./TransactionEntryStyle"
import { FormContainer } from "../../shared/FormContainer"
import api from "../../../services/mywallet-api"
import UserContext from '../../../contexts/UserContext'
import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import MyInput from "../../shared/MyInput"

export default function TransactionEntryPage() {

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

    function sendEntry(e) {
        e.preventDefault();

        const body = {
            ...inputValues,
            entry: true,
            clientId: user.id
        }

        api.sendEntry(body)
        .then(res => {
            alert('entrada registrada com sucesso')
            history.push('/home')
        })
        .catch(err => {
            console.log(err.response)
            alert('deu ruim  ' + err.response.data)
        })
    }

    return (
        <PageContainer>
            <EntryHeader>
                <MyTitle text="Nova entrada"/>
            </EntryHeader>
            <FormContainer onSubmit={e => sendEntry(e)}>
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
                <button className="submit-button" type="submit">Salvar entrada</button>
            </FormContainer>
        </PageContainer>
    )
}