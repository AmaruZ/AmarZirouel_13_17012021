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

const Rotate = styled.div`
    width: 30px;
    height: 30px;
    border: 5px solid transparent;
    border-top: 5px solid ${colors.violet};
    border-radius: 50%;
    animation: ${rotate} 2s linear infinite;
`

function Loader() {
    return <Rotate></Rotate>
}
export default Loader
