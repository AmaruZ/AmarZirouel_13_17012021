import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import Account from '../../components/Account'
import Loader from '../../components/Loader'
import Welcome from '../../components/Welcome'
import { fetchOrUpdateProfile } from '../../features/profile'
import { selectLogin, selectProfile } from '../../utils/selectors'
import { ScreenReaderOnlyH2 } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'

const ProfileWrapper = styled.main`
    background: ${colors.lightGrey};
    flex: 1;
`

function Profile() {
    const login = useSelector(selectLogin)
    const profile = useSelector(selectProfile)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchOrUpdateProfile(login.token))
    }, [login, dispatch])

    return login.isLogged ? (
        profile.loading ? (
            <div
                style={{ flex: '1', display: 'flex', justifyContent: 'center' }}
            >
                <Loader type={'big'} />
            </div>
        ) : (
            <ProfileWrapper>
                <Welcome
                    firstName={profile.firstName}
                    lastName={profile.lastName}
                />
                <ScreenReaderOnlyH2>Accounts</ScreenReaderOnlyH2>
                <Account
                    name="Argent Bank Checking (x8349)"
                    balance="$2,082.79"
                />
                <Account
                    name="Argent Bank Savings (x6712)"
                    balance="$10,928.42"
                />
                <Account
                    name="Argent Bank Credit Card (x8349)"
                    balance="$184.30"
                />
            </ProfileWrapper>
        )
    ) : (
        <Navigate to={'/login'} />
    )
}

export default Profile
