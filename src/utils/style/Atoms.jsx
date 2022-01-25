import styled from 'styled-components'
import { css } from 'styled-components'
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

const ScreenReaderOnlyTitle = css`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
`

export const ScreenReaderOnlyH1 = styled.h1`
    ${ScreenReaderOnlyTitle}
`
export const ScreenReaderOnlyH2 = styled.h2`
    ${ScreenReaderOnlyTitle}
`
