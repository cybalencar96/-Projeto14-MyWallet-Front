import styled from 'styled-components'

const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    padding: 20px;

    ${props => props.centralized ?  'display: flex; justify-content: center; align-items: center;' : ""}
    ${props => props.justifiedBetween ?  'display: flex; flex-direction: column; justify-content: space-between; align-items: center;' : ""}
`

export {
    PageContainer
}
