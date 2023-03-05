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
                <div>
                    Welcome to CRM Website!
                </div>
                <div>
                    Login
                </div>
                <Form className="form--form">
                    <div>
                        Email
                    </div>
                    <input
                        id="login-form--email"
                        required
                    ></input>
                    <div>
                        Password
                    </div>
                    <input
                        id="login-form--password"
                        required
                    ></input>
                    <div>
                        <button
                            onClick={loginUser}
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