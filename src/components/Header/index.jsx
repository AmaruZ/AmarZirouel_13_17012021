import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/argentBankLogo.png'
import { selectLogin, selectProfile } from '../../utils/selectors'
import * as logAction from '../../features/login'
import {
    faCircle,
    faSignOut,
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import colors from '../../utils/style/colors'

const HeaderContainer = styled.header`
    display: flex;
    height: 70px;
    background-color: white;
`

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 5px 20px;
`

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${colors.black};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`
const LinksContainer = styled.span`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
`

const Logo = styled.img`
    max-width: 100%;
    width: 200px;
`
const IconWrapper = styled.span`
    margin-right: 15px;
`

const StyledIcon = styled(FontAwesomeIcon)`
    margin-right: 15px;
`

function Header() {
    const dispatch = useDispatch()
    const login = useSelector(selectLogin)
    const profile = useSelector(selectProfile)

    return (
        <HeaderContainer>
            <StyledNav>
                <StyledLink to="/">
                    <Logo src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </StyledLink>
                <>
                    {!login.isLogged ? (
                        <StyledLink to="/login">
                            <IconWrapper className="fa-layers fa-fw fa-lg">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    color="#9EADBA"
                                    transform="grow-8"
                                />
                                <FontAwesomeIcon
                                    icon={faUserCircle}
                                    color="#DFE6EC"
                                    mask="fa-regular fa-circle"
                                    transform="grow-8"
                                />
                            </IconWrapper>
                            Sign In
                        </StyledLink>
                    ) : (
                        <LinksContainer>
                            <StyledLink to="/profile">
                                <IconWrapper className="fa-layers fa-fw fa-lg">
                                    <FontAwesomeIcon
                                        icon={faCircle}
                                        color="#9EADBA"
                                        transform="grow-8"
                                    />
                                    <FontAwesomeIcon
                                        icon={faUserCircle}
                                        color="#DFE6EC"
                                        mask="fa-regular fa-circle"
                                        transform="grow-8"
                                    />
                                </IconWrapper>
                                {profile.firstName}
                            </StyledLink>
                            <StyledLink
                                to="/"
                                onClick={() => dispatch(logAction.logout())}
                            >
                                <StyledIcon
                                    icon={faSignOut}
                                    transform="grow-8"
                                />
                                Sign Out
                            </StyledLink>
                        </LinksContainer>
                    )}
                </>
            </StyledNav>
        </HeaderContainer>
    )
}

export default Header
