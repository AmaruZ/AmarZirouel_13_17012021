import Account from '../../components/Account'
import Welcome from '../../components/Welcome'

function Profile() {
    return (
        <main className="main bg-dark">
            <Welcome />
            <h2 className="sr-only">Accounts</h2>
            <Account name="Argent Bank Checking (x8349)" balance="$2,082.79" />
            <Account name="Argent Bank Savings (x6712)" balance="$10,928.42" />
            <Account name="Argent Bank Credit Card (x8349)" balance="$184.30" />
        </main>
    )
}

export default Profile
