import { PageContainer } from "./PageContainer";
import Loader from "react-loader-spinner";

export default function Loading() {
    return (
        <PageContainer centralized>
            <Loader
                type="Puff"
                color="#ff87ff"
                height={100}
                width={100}
            />
        </PageContainer>
    )
}