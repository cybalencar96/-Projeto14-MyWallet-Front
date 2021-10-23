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
     overflow: hidden;
     ${props => props.type !== "login" && "max-height:35px;"}
     ${props => props.type !== "login" && "width:88%;"}
     text-align: ${props => props.type === "login" ? "center" : "start"};

     word-break: none;
     overflow-y: scroll;
     text-overflow: ellipsis;

     color: white;
     
`

