import { ENDPOINTS, URLS } from "../config"

/**
 * @file registerFormUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the Register Form component.
 */

/**
 * @brief The registerUserUtil() attempts to register a new user
 */
function registerUserUtil()
{
    const registerUrl = `${URLS.api}${ENDPOINTS.register}`            // Register API endpoint

    // Get form values
    const firstName = document.getElementById("register-form--first-name").value
    const lastName = document.getElementById("register-form--last-name").value
    const email = document.getElementById("register-form--email").value
    const password = document.getElementById("register-form--password").value

    // Build request body
    const registerBody = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
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
        })
        .catch(console.error)
}

export { registerUserUtil }