import styled from "styled-components";

const FormContainer = styled.form`
        max-width: 800px;
        margin: 0 auto;

    .submit-button {
        background-color: #A328D6;
        border-radius: 5px;
        border: none;
        height: 46px;

        width: 100%;
        display:flex;
        justify-content:center;
        align-items:center;

        color: white;
        font-weight: 700;
        font-size: 20px;

        cursor: pointer;
        transition: background-color 0.3s
    }

    .submit-button:hover {
        background-color: #bb55e6
    }
`

export  {
    FormContainer
}