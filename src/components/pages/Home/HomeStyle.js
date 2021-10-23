import styled from 'styled-components'

const HomeHeader = styled.header`
    display: flex;
    justify-content:space-between;
    align-items:center;

    width: 100%;
`

const DataContainer = styled.section`
    position: relative;
    height: 450px;
    width:100%;
    background-color: white;
    border-radius: 5px;
    padding-top: 20px;

    display:flex;
    flex-direction: column;
    justify-content: space-between;

    ul {
        height: 85%;
        overflow:scroll;
    }

    ul li {
        display: flex;
        align-items:center;
        margin-bottom: 20px;

    }

    .date {
        font-size: 16px;
        color: #C6C6C6;
        width: 20%;
        text-align: center;
        font-family: 'Raleway', sans-serif;
    }

    .description {
        font-size: 16px;
        color: black;
        width: 60%;
        font-family: 'Raleway', sans-serif;
        word-wrap:break-word;
    }

    .value {
        font-size: 16px;
        color: #03AC00;
        width: 20%;
        text-align: center;
        font-family: 'Raleway', sans-serif;
    }

    .posValue {
        color: #03AC00;
    }

    .negValue {
        color: #C70000;
    }

    & article {
        height: calc(20% - 20px); 
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-shadow: -1px -6px 27px -7px rgba(0,0,0,0.2)
    }

    & article p:first-child {
        font-weight: 700;
    }
`

const TransactionsContainer = styled.section`
    display:flex;
    justify-content: space-between;
    align-items:flex-end;
    
    width: 100%;

    & a {
        width: 48%;
        text-decoration: none;
        cursor: pointer;
    }
    & .transaction-button {
        background-color: #A328D6;
        font-weight: 700;
        width: 100%;
        height:110px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: 10px;
        
        p {
            color: white;
        }
    }
`

export {
    HomeHeader,
    DataContainer,
    TransactionsContainer
}