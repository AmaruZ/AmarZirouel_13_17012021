import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/argentBankLogo.png'
import { selectLogin, selectProfile } from '../../utils/selectors'
import * as logAction from '../../features/login'

const HeaderContainer = styled.header`
    height: 65px;
    background-color: white;
`

function Header() {
    const dispatch = useDispatch()
    const login = useSelector(selectLogin)
    const profile = useSelector(selectProfile)

    return (
        <HeaderContainer>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    {!login.isLogged ? (
                        <Link className="main-nav-item" to="/login">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    ) : (
                        <>
                            {' '}
                            <Link className="main-nav-item" to="/profile">
                                <i className="fa fa-user-circle"></i>
                                {profile.firstName}
                            </Link>
                            <Link
                                to="/"
                                onClick={() => dispatch(logAction.logout())}
                            >
                                <i className="fa fa-sign-out"></i>
                                Sign Out
                                {}
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </HeaderContainer>
    )
}

export default Header

/* 
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src="./img/argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="/user">
                        <i className="fa fa-user-circle"></i>
                        Tony
                    </Link>
                    <Link className="main-nav-item" to="/">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>
            </nav>
            */
