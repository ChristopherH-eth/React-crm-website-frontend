import { ENDPOINTS, URLS } from "./config"

/**
 * @file leadFormUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the LeadForm component.
 */

const loginUrl = `${URLS.api}${ENDPOINTS.login}`        // Login API endpoint
let authHeader                                          // Authorization header to be set on successful logins

function loginUserUtil(navigate)
{
    // Get form values
    const email = document.getElementById("login-form--email").value
    const password = document.getElementById("login-form--password").value

    // Build request body
    const loginBody = {
        email: email,
        password: password
    }

    // Send request to server
    fetch(loginUrl, {
        method: "POST",
        mode: "cors",
        // credentials: include,
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(loginBody)
    })
        .then((res) => res.json().then((data) => ({status: res.status, body: data})))
        .then((data) => {
            authHeader = data.body.jwt.token

            if (data.status === 200)
                navigate("/")
        })
        .catch(console.error)
}

export { loginUserUtil, authHeader }