import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Account from '../../components/Account'
import Loader from '../../components/Loader'
import Welcome from '../../components/Welcome'
import { fetchOrUpdateProfile } from '../../features/profile'
import { selectLogin, selectProfile } from '../../utils/selectors'

function Profile() {
    const login = useSelector(selectLogin)
    const profile = useSelector(selectProfile)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchOrUpdateProfile(login.token))
    }, [login, dispatch])

    return login.isLogged ? (
        profile.loading ? (
            <Loader />
        ) : ( 
            <main className="main bg-dark">
                <Welcome
                    firstName={profile.firstName}
                    lastName={profile.lastName}
                />
                <h2 className="sr-only">Accounts</h2>
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
            </main>
        )
    ) : (
        <Navigate to={'/login'} />
    )
}

export default Profile
