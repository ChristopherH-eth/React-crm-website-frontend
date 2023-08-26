import React from "react"
import { useNavigate } from "react-router-dom"
import { loginUserUtil, showRegisterFormUtil } from "../util/loginUtil"
import RegisterForm from "./forms/RegisterForm"
import { handleSubmitUtil } from "../util/util"

/**
 * @file Login.js
 * @author 0xChristopher
 * @brief This file is responsible for the Login component of the CRM website.
 */

/**
 * @brief The Login() function builds the page login component.
 * @return Returns the login component to be added to the page
 */
function Login(props)
{
    const {
        setIsLoggedIn                                       // State function for isLoggedIn variable
    } = props

    const [error, setError] = React.useState("")            // Most recent error code

    // useNavigate hook to redirect browser
    const navigate = useNavigate()

    // Component functions stored in loginUtil
    const loginUser = () => loginUserUtil(navigate, setIsLoggedIn, setError)
    const showRegisterForm = () => showRegisterFormUtil()

    // Component functions stored in util
    const handleSubmit = (event) => handleSubmitUtil(event, loginUser)

    return (
        <section className="login">
            <div className="login--container">
                <form className="form">
                    <div className="header-text">
                        Welcome to CRM Website!
                    </div>
                    <div className="header-text">
                        Login
                    </div>
                    <div className="label">
                        Email
                    </div>
                    <input
                        className="input-field"
                        id="login-form--email"
                        required
                        type="text"
                        onKeyDown={handleSubmit}
                    ></input>
                    <div className="label">
                        Password
                    </div>
                    <input
                        className="input-field"
                        id="login-form--password"
                        required
                        type="password"
                        onKeyDown={handleSubmit}
                    ></input>
                    <div className="footer-container">
                        <div className="button--container">
                            <button
                                onClick={loginUser}
                                className="footer--button-end"
                                id="login-form--login-button"
                                type="button"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                    <div className="error">
                        {error}
                    </div>
                    <div className="text-centered" onClick={showRegisterForm}>
                        New User? Register Here!
                    </div>
                </form>
                {/* Register Form component */}
                <RegisterForm />
            </div>
        </section>
    )
}

export default Login