import { PageContainer } from "../../shared/PageContainer"
import MyTitle from "../../shared/MyTitle"
import { ExitHeader } from "./TransactionStyle"
import { FormContainer } from "../../shared/FormContainer"
import api from "../../../services/mywallet-api"
import UserContext from '../../../contexts/UserContext'
import { useState, useContext, useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import MyInput from "../../shared/MyInput"
import Loading, { ButtonLoading } from "../../shared/Loading"
import Swal from "sweetalert2"

export default function TransactionPage() {

    const initialInputValues = {
        value: "",
        description: ""
    }

    const [inputValues, setInputValues] = useState(initialInputValues);
    const { user, setUser } = useContext(UserContext)
    const history = useHistory();
    const location = useLocation().pathname.split('/');
    const transactionPage = location[location.length - 1];
    const [loading, setLoading] = useState(false);

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
        setLoading(true);

        const body = {
            ...inputValues,
            entry: transactionPage === 'entry' ? true : false,
        }

        api.sendTransaction(user.token,body)
        .then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Yass',
                text: `A ${transactionPage} was registered successfully!!`,
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
            setLoading(false);
        })
    }

    if (!user) return (
        <Loading />
    )


    return (
        <PageContainer>
            <ExitHeader>
                <MyTitle text={`Nova ${transactionPage === 'entry' ? 'entrada' : 'saída'}`}/>
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
                <button className="submit-button" type="submit">{loading ? <ButtonLoading /> : 'Salvar transação'}</button>
            </FormContainer>

        </PageContainer>
    )
}