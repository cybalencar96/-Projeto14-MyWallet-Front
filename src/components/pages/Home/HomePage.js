import { PageContainer } from "../../shared/PageContainer"
import MyTitle from "../../shared/MyTitle"
import { ExitOutline } from 'react-ionicons'
import { HomeHeader, DataContainer, TransactionsContainer } from "./HomeStyle"
import { AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import UserContext from "../../../contexts/UserContext"

export default function HomePage() {

    const {user} = useContext(UserContext)

    return (
        <PageContainer justifiedBetween>
            <HomeHeader>
                <MyTitle text={"Olá, " + user.name}/>
                <ExitOutline
                    color={'#FFF'} 
                    height="30px"
                    width="30px"
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