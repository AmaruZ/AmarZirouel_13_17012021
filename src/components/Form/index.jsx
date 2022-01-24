import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import { signIn } from '../../features/login'
import { selectLogin } from '../../utils/selectors'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { StyledButton, StyledInput } from '../../utils/style/Atoms'

const IconWrapper = styled.span`
    width: 5rem;
    height: 5rem;
`
const BigUserIcon = styled(FontAwesomeIcon)`
    font-size: 5rem;
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1.2rem;

    & label {
        font-weight: bold;
    }
`
const InputRemember = styled.div`
    display: flex;
    margin-bottom: 1.2rem;
    & label {
        margin-left: 0.25rem;
    }
`

function Form() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login = useSelector(selectLogin)
    const dispatch = useDispatch()

    return login.isLogged ? (
        <Navigate to="/profile" />
    ) : (
        <>
            <IconWrapper className="fa-layers fa-fw fa-lg">
                <BigUserIcon icon={faCircle} color="#9EADBA" />
                <BigUserIcon icon={faUserCircle} color="#DFE6EC" />
            </IconWrapper>
            <h1>Sign In</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(signIn(username, password))
                }}
            >
                <InputWrapper>
                    <label htmlFor="username">Username</label>
                    <StyledInput
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="password">Password</label>
                    <StyledInput
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputWrapper>
                <InputRemember>
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </InputRemember>

                <StyledButton type="submit">Sign In</StyledButton>
            </form>
        </>
    )
}

export default Form
