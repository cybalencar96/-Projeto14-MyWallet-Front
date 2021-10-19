import styled from 'styled-components'

export default function MyInput({
    width, 
    disabled,
    ...otherProps
}) {

    return (
        <Input 
            disabled={disabled} 
            width={width}
            {...otherProps}
        />
    )
}



const Input = styled.input`
    background: ${props => props.disabled ? '#F2F2F2' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: ${(props) => props.width ? props.width : '100%'};
    height: 45px;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 10px;

    &::placeholder {
        color: #DBDBDB;
    }

    &:focus {
        outline: none;
    }
`