import React from "react"
import { Form, useNavigate } from "react-router-dom"
import { loginUserUtil, showRegisterFormUtil } from "../util/loginUtil"
import RegisterForm from "./forms/RegisterForm"

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

    return (
        <section className="login">
            <div className="login--container">
                <Form className="form--form">
                    <div className="form--header-text">
                        Welcome to CRM Website!
                    </div>
                    <div className="form--header-text">
                        Login
                    </div>
                    <div className="form--label">
                        Email
                    </div>
                    <input
                        className="form--input-field"
                        id="login-form--email"
                        required
                        type="text"
                    ></input>
                    <div className="form--label">
                        Password
                    </div>
                    <input
                        className="form--input-field"
                        id="login-form--password"
                        required
                        type="password"
                    ></input>
                    <div className="form--footer-container">
                        <div className="button--container">
                            <button
                                onClick={loginUser}
                                className="form--footer--button-end"
                                id="login-form--login-button"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                    <div className="form--error">
                        {error}
                    </div>
                    <div className="form--text-centered" onClick={showRegisterForm}>
                        New User? Register Here!
                    </div>
                </Form>
                {/* Register Form component */}
                <RegisterForm />
            </div>
        </section>
    )
}

export default Login