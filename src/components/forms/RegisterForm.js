import { Form } from "react-router-dom"
import { registerUserUtil } from "../../util/forms/registerFormUtil"

/**
 * @file RegisterForm.js
 * @author 0xChristopher
 * @brief This file is responsible for the Register Form component of the CRM website.
 */

/**
 * @brief The RegisterForm() function builds the page register form component.
 * @return Returns the register form component to be added to the page
 */
function RegisterForm()
{
    // Component functions stored in registerFormUtil
    const registerUser = () => registerUserUtil()

    return (
        <>
            {/* Page Mask (dimmed background) */}
            <div className="page-mask" id="page-mask" />
            {/* Register Form */}
            <section className="form-container" id="register-form--container">
                <div className="form">
                    <div className="form--header">
                        <div className="form--header-text">
                            Register
                        </div>
                    </div>
                    <Form>
                        <div className="form--label">
                            First Name
                        </div>
                        <input
                            className="form--input-field register-form--input"
                            id="register-form--first-name"
                            required
                            type="text"
                        ></input>
                        <div className="form--label">
                            Last Name
                        </div>
                        <input
                            className="form--input-field register-form--input"
                            id="register-form--last-name"
                            required
                            type="text"
                        ></input>
                        <div className="form--label">
                            Email
                        </div>
                        <input
                            className="form--input-field register-form--input"
                            id="register-form--email"
                            required
                            type="text"
                        ></input>
                        <div className="form--label">
                            Password
                        </div>
                        <input
                            className="form--input-field register-form--input"
                            id="register-form--password"
                            required
                            type="password"
                        ></input>
                        <div className="form--label">
                            Confirm Password
                        </div>
                        <input
                            className="form--input-field register-form--input"
                            id="register-form--confirm-password"
                            required
                            type="password"
                        ></input>
                        <div className="form--footer">
                            <div className="form--footer--button-container">
                                <button 
                                    className="form--footer--button"
                                    id="register-user--button"
                                    type="submit"
                                    onClick={registerUser}>
                                    Register
                                </button>
                                <button 
                                    className="form--footer--button-end"
                                    type="button"
                                    id="form--cancel">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </section>
        </>
    )
}

export default RegisterForm