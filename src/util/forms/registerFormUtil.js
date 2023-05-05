import { ENDPOINTS, URLS } from "../config"
import { clearCurrentFields } from "../util"

/**
 * @file registerFormUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the Register Form component.
 */

/**
 * @brief The registerUserUtil() attempts to register a new user
 */
function registerUserUtil(setRegisterError)
{
    const registerUrl = `${URLS.api}${ENDPOINTS.register}`              // Register API endpoint
    const registerFormInputClass = "register-form--input"               // Form input fields class

    // Get form values
    const firstName = document.getElementById("register-form--first-name").value
    const lastName = document.getElementById("register-form--last-name").value
    const fullName = firstName + " " + lastName
    const email = document.getElementById("register-form--email").value
    const password = document.getElementById("register-form--password").value
    const confirmPassword = document.getElementById("register-form--confirm-password").value

    if (!isValidInput(setRegisterError, firstName, lastName, email, password, confirmPassword))
        return

    // Build request body
    const registerBody = {
        first_name: firstName,                                          // New user first name
        last_name: lastName,                                            // New user last name
        full_name: fullName,                                            // New user full name
        email: email,                                                   // New user email
        password: password                                              // New user password
    }

    // Send request to server
    fetch(registerUrl, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(registerBody)
    })
        .then((res) => res.json().then((data) => ({status: res.status, body: data})))
        .then((data) => {
            console.log(data)

            // Check for registration errors
            if (data.status === 422 || data.status === 409)
            {
                for (let prop in data.body)
                {
                    if (Object.prototype.hasOwnProperty.call(data.body, prop))
                    {
                        setRegisterError(JSON.stringify(data.body[prop]))

                        break
                    }
                }
            }

            // Clear input fields on success
            if (data.status === 201)
            {
                clearCurrentFields(registerFormInputClass)
                setRegisterError("")
            }
        })
        .catch(console.error)
}

/**
 * @brief The isValidInput() function checks the validates Register Form input
 * @param setRegisterError Sets the state variable registerError
 * @param firstName
 * @param lastName
 * @param email
 * @param password
 * @param confirmPassword Should match value in password field
 */
function isValidInput(setRegisterError, firstName, lastName, email, password, confirmPassword)
{
    if (firstName === "")
    {
        setRegisterError("Please enter your first name")

        return false
    }
    else if (lastName === "")
    {
        setRegisterError("Please enter your last name")

        return false
    }
    else if (email === "")
    {
        setRegisterError("Please enter your email address")

        return false
    }
    else if (password === "")
    {
        setRegisterError("Please enter a password")

        return false
    }
    else if (confirmPassword === "")
    {
        setRegisterError("Please confirm your password")

        return false
    }
    // Check that Confirm Password field matches Password field
    else if (password !== confirmPassword)
    {
        setRegisterError("Password does not match")

        return false
    }
    else
        return true
}

export { registerUserUtil }