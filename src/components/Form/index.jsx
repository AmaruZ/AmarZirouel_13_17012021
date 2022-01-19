import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { signIn } from '../../features/login'
import { selectLogin } from '../../utils/selectors'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function Form({ icon, title }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login = useSelector(selectLogin)
    const dispatch = useDispatch()

    return login.isLogged ? (
        <Navigate to="/profile" />
    ) : (
        <>
            {' '}
            <i className={icon}></i>
            <h1>{title}</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(signIn(username, password))
                }}
            >
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>

                <Link to="/profile" className="sign-in-button">
                    Sign In
                </Link>
                <button type="submit" className="sign-in-button">
                    Sign In
                </button>
            </form>
        </>
    )
}

export default Form
