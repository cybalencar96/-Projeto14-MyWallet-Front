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

    & .no-content {
        width: 100%;
        height: 100%;
        padding: 0 20px;

        color: #868686;
        font-size: 20px;
        line-height: 23px;

        display:flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    ul {
        height: 85%;
        overflow:scroll;
    }

    ul li {
        display: flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom: 20px;

    }

    ul li > div {
        display: flex;
        align-items: center;
    }

    .date {
        font-size: 16px;
        color: #C6C6C6;
        text-align: center;
        font-family: 'Raleway', sans-serif;
        margin: 0 10px;
    }

    .description {
        font-size: 16px;
        color: black;
        font-family: 'Raleway', sans-serif;
        word-wrap:break-word;
    }

    .value {
        font-size: 16px;
        color: #03AC00;
        text-align: end;
        font-family: 'Raleway', sans-serif;
        margin:0 10px;
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