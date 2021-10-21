import { PageContainer } from "../../shared/PageContainer"
import MyTitle from "../../shared/MyTitle"
import { ExitOutline } from 'react-ionicons'
import { HomeHeader, DataContainer, TransactionsContainer } from "./HomeStyle"
import { AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'
import { Link, useHistory } from 'react-router-dom'
import { useContext, useEffect } from "react"
import UserContext from "../../../contexts/UserContext"
import api from "../../../services/mywallet-api"
import Loading from "../../shared/Loading"

export default function HomePage() {
    const {user, setUser} = useContext(UserContext)
    const history = useHistory()

    useEffect(() => {
        const userToken = localStorage.getItem('userToken')
        if (userToken) {
            const {token} = JSON.parse(userToken)
            api.getUserInfo(token)
            .then(res => {
                console.log(res.data)
                setTimeout(() => setUser(res.data),500)
            })
            .catch(err => {
                alert(err.response.data)
                localStorage.setItem('userToken','')
                history.push('/')
            })
        } else {
            history.push('/')
        }
        
    },[])


    function logOut() {
        api.logOut(user.token)
        localStorage.setItem('userToken','')
        history.push('/')
    }

    if (!user) return (
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
                />
            </HomeHeader>

            <DataContainer>
                <ul>
                    <li>
                        <p className="date">30/11</p>
                        <p className="description">Almoço mãe</p>
                        <p className="value">39.90</p>
                    </li>
                    <li>
                        <p className="date">30/11</p>
                        <p className="description">Almoço mãe</p>
                        <p className="value">39,90</p>
                    </li>
                </ul>
                <article>
                    <p>SALDO</p>
                    <p>R$ 15,00</p>
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