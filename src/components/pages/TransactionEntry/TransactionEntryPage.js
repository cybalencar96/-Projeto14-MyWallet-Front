import { PageContainer } from "../../shared/PageContainer"
import MyTitle from "../../shared/MyTitle"
import { EntryHeader } from "./TransactionEntryStyle"
import MyForm from "../../shared/MyForm"

export default function TransactionEntryPage() {
    return (
        <PageContainer>
            <EntryHeader>
                <MyTitle text="Nova entrada"/>
            </EntryHeader>
            <MyForm type="transaction" buttonText="Salvar entrada"/>
        </PageContainer>
    )
}