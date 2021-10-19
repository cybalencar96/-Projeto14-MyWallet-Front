import { PageContainer } from "../../shared/PageContainer"
import { RegisterContainer } from "./RegisterStyle"
import MyTitle from "../../shared/MyTitle"
import MyForm from "../../shared/MyForm"
import { Link } from 'react-router-dom'

export default function RegisterPage() {
    return (
        <PageContainer centralized>
            <RegisterContainer>
                <MyTitle type="login" text="MyWallet"/>
                <MyForm type="register"/>
                <Link className="to-login" to="/">Já tem uma conta? Entre agora!</Link>
            </RegisterContainer>
        </PageContainer>
    )
}