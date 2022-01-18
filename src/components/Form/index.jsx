import { Link } from 'react-router-dom'

function Form({icon, title}) {
    return (
        <>
            <i className={icon}></i>
            <h1>{title}</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>

                <Link to="/profile" className="sign-in-button">
                    Sign In
                </Link>
                {/* <button className="sign-in-button">Sign In</button> */}
            </form>
        </>
    )
}

export default Form
