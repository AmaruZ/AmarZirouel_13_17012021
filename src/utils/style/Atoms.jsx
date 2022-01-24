import styled from 'styled-components'
import colors from './colors'

export const StyledButton = styled.button`
    white-space: nowrap;
    padding: 12px;
    font-family: Montserrat, sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 5px;
    border: ${colors.violet} 2px solid;
    background-color: ${colors.violet};
    color: #fff;
    cursor: pointer;
    &:active {
        border: ${colors.violet} 2px solid;
        background-color: white;
        color: ${colors.violet};
    }
`
export const StyledInput = styled.input`
    border: ${colors.grey} 2px solid;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 5px;
    &::placeholder {
        color: ${colors.grey};
    }
`
