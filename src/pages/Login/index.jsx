import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import Form from '../../components/Form'
import { selectLogin } from '../../utils/selectors'
import colors from '../../utils/style/colors'

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: ${colors.lightGrey};
`
const SignInSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    background: white;
    border: ${colors.grey} 2px solid;
`

function Login() {
    const login = useSelector(selectLogin)
    return login.isLogged ? (
        <Navigate to="/profile" />
    ) : (
        <StyledMain>
            <SignInSection>
                <Form />
            </SignInSection>
        </StyledMain>
    )
}

export default Login
