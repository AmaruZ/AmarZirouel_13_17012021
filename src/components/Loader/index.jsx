import styled, { keyframes } from 'styled-components'
import colors from '../../utils/style/colors'

const rotate = keyframes`
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(360deg)
    }
`

const LoaderContainer = styled.div`
    ${(props) =>
        props.$type === 'small'
            ? `
    width: 30px;
    height: 30px;
    border: 5px solid transparent;
    border-top: 5px solid ${colors.violet};
    `
            : props.$type === 'big' &&
              `
    width: 100px;
    height: 100px;
    border: 20px solid transparent;
    border-top: 20px solid ${colors.violet};
    align-self: center;

    `}

    border-radius: 50%;
    animation: ${rotate} 2s linear infinite;
`

function Loader({ type }) {
    return <LoaderContainer $type={type}></LoaderContainer>
}
export default Loader
