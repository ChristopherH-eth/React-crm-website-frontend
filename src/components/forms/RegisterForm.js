import React from "react"
import { registerUserUtil } from "../../util/forms/registerFormUtil"
import { destroyFormUtil } from "../../util/util"
import Layout from "../layouts/Layout"

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
    // Current registration error (if any)
    const [registerError, setRegisterError] = React.useState()

    // Component functions stored in registerFormUtil
    const registerUser = () => registerUserUtil(setRegisterError, registerFormInputClass)

    // Component functions stored in util
    const destroyForm = () => destroyFormUtil(registerFormInputClass, registerFormRef)

    const registerFormInputClass = "register-form--input"               // Register Form input fields class
    const registerFormRef = React.useRef(null)                          // Reference to the Register Form

    return (
        <div>
            {/* Page Mask (dimmed background) */}
            <div className="page-mask" id="page-mask" />
            {/* Register Form */}
            <section className="form-container" id="register-form--container">
                <div className="form" ref={registerFormRef}>
                    <div className="form--header">
                        <div className="form--header-text">
                            Register
                        </div>
                    </div>
                    <form>
                        {/* <div className="form--label">
                            <span className="required" title="required">*</span>
                            <span>First Name</span>
                        </div>
                        <input
                            className="form--input-field register-form--input"
                            id="register-form--first-name"
                            required
                            type="text"
                        ></input>
                        <div className="form--label">
                            <span className="required" title="required">*</span>
                            Last Name
                        </div>
                        <input
                            className="form--input-field register-form--input"
                            id="register-form--last-name"
                            type="text"
                        ></input>
                        <div className="form--label">
                            <span className="required" title="required">*</span>
                            <span>Email</span>
                        </div>
                        <input
                            className="form--input-field register-form--input"
                            id="register-form--email"
                            required
                            type="email"
                        ></input>
                        <div className="form--label">
                            <span className="required" title="required">*</span>
                            <span>Password</span>
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
                        ></input> */}
                        <Layout />
                        <div className="form--footer-border" />
                        <div className="form--footer-container">
                            <div className="button--container">
                                <button 
                                    id="register-user--button"
                                    type="button"
                                    onClick={registerUser}
                                >
                                    Register
                                </button>
                                <button 
                                    className="secondary-button"
                                    type="button"
                                    id="form--cancel"
                                    onClick={destroyForm}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                        {/* Register Error */}
                        {registerError && <div className="form--error">{registerError}</div>}
                    </form>
                </div>
            </section>
        </div>
    )
}

export default RegisterForm