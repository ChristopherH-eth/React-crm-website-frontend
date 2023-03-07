import { Form, useNavigate } from "react-router-dom"
import { loginUserUtil } from "../util/loginUtil"

/**
 * @file Login.js
 * @author 0xChristopher
 * @brief This file is responsible for the Login component of the CRM website.
 */

/**
 * @brief The Login() function builds the page login component.
 * @return Returns the login component to be added to the page
 */
function Login()
{
    const navigate = useNavigate()

    // Component functions stored in contactsUtil
    const loginUser = () => loginUserUtil(navigate)

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
                    <div className="form--footer--button-container">
                        <button
                            onClick={loginUser}
                            className="form--footer--button-end"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </Form>
            </div>
        </section>
    )
}

export default Login