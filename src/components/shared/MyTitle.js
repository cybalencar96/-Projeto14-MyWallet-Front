import styled from "styled-components"

export default function Title ({type,text}) {
    return (
        <TitleContainer type={type}>
            {text}
        </TitleContainer>
    )
}

const TitleContainer = styled.h1`
     ${props => props.type === "login" ? "font-family: 'Saira Stencil One', cursive" : "font-weight: 700"};

     font-size:  ${props => props.type === "login" ? "32px" : "26px"}; 
     color: white;
     text-align: center;
`

