import { PageContainer } from "../../shared/PageContainer"
import MyTitle from "../../shared/MyTitle"
import { ExitOutline } from 'react-ionicons'
import { HomeHeader, DataContainer, TransactionsContainer } from "./HomeStyle"
import { AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'
import { Link, useHistory } from 'react-router-dom'
import { useContext, useEffect, useState } from "react"
import UserContext from "../../../contexts/UserContext"
import api from "../../../services/mywallet-api"
import Loading from "../../shared/Loading"
import { successAlert } from "../../../utils/sweetalert"

export default function HomePage() {
    const {user, setUser} = useContext(UserContext)
    const [transactions, setTransactions] = useState('')
    const [total, setTotal] = useState(0)
    const history = useHistory()

    useEffect(() => {
        api.getTransactions(user.token)
        .then(transactionRes => {
            setTransactions(transactionRes.data)
            
            const newTotal = sumAll(transactionRes.data)
            setTotal(newTotal)
        })
        .catch(err => {
            history.push('/')
        })
    },[])


    function logOut() {
        successAlert({text: 'Tchaau, volte sempre!'})
        api.logOut(user.token);
        setUser('');
        localStorage.removeItem('userToken');
        history.push('/');
    }

    if (!user.name) return (
        <Loading />
    )

    return (
        <PageContainer justifiedBetween>
            <HomeHeader>
                <MyTitle text={"Olá, " + user.name}/>
                <ExitOutline
                    color={'#FFF'} 
                    height="30px"
                    width="30px"
                    onClick={logOut}
                    style={{ cursor: 'pointer' }}
                />
            </HomeHeader>

            <DataContainer>
                <ul>
                    {
                        transactions.length !== 0 ? 
                        
                        transactions.reverse().map(transaction => (
                            <li>
                                <div>
                                    <p className="date">{new Date(transaction.date).toLocaleString().substring(0,5)}</p>
                                    <p className="description">{transaction.description}</p>
                                </div>
                                <p className={'value ' + (transaction.value >= 0 ? "posValue" : "negValue")}>{transaction.value}</p>
                            </li>
                        ))

                        :

                        <p className="no-content">
                            Não há registros de entrada ou saída
                        </p>
                    }
                </ul>
                <article>
                    <p>SALDO</p>
                    <p>R$ {total.toFixed(2)}</p>
                </article>
            </DataContainer>

            <TransactionsContainer>
                <Link to="/transaction/entry">
                    <div className="transaction-button">
                            <AddCircleOutline
                                color={'#FFF'} 
                                height="22px"
                                width="22px"
                            />
                            <p>Nova Entrada</p>
                    </div>
                </Link>

                <Link to="/transaction/exit">
                    <div className="transaction-button">
                        <RemoveCircleOutline
                            color={'#FFF'} 
                            height="22px"
                            width="22px"
                        />
                        <p>Nova Saída</p>
                    </div>
                </Link>
            </TransactionsContainer>
        </PageContainer>
    )
}

function sumAll (arrObjs) {
    //[{value: 123},{value: 345}]
    return arrObjs.reduce((accum, curr) => {
        return Number(accum) + Number(curr.value)
    },0)
}

export {
    sumAll
}