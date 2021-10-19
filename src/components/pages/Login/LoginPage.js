import { PageContainer } from "../../shared/PageContainer"
import { LoginContainer } from "./LoginStyle"
import MyTitle from "../../shared/MyTitle"
import MyForm from "../../shared/MyForm"
import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
        <PageContainer centralized>
            <LoginContainer>
                <MyTitle type="login" text="MyWallet"/>
                <MyForm type="login"/>
                <Link className="to-register" to="/register">Primeira vez? Cadastre-se já!</Link>
            </LoginContainer>
        </PageContainer>
    )
}