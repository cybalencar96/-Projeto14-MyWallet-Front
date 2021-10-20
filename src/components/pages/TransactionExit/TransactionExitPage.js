import { PageContainer } from "../../shared/PageContainer"
import MyTitle from "../../shared/MyTitle"
import { ExitHeader } from "./TransactionExitStyle"
import MyForm from "../../shared/MyForm"

export default function TransactionExitPage() {
    return (
        <PageContainer>
            <ExitHeader>
                <MyTitle text="Nova saída"/>
            </ExitHeader>
            <MyForm type="transaction" buttonText="Salvar saída"/>
        </PageContainer>
    )
}