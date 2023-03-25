import { ENDPOINTS, URLS } from "./config"

/**
 * @file loginFormUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the Login Form component.
 */

/**
 * @brief The loginUserUtil() function attempts to log in to the CRM server.
 * @param navigate The useNavigate hook to redirect browser
 * @param setIsLoggedIn React state function to track user login
 */
function loginUserUtil(navigate, setIsLoggedIn)
{
    const loginUrl = `${URLS.api}${ENDPOINTS.login}`            // Login API endpoint

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
        credentials: "include",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(loginBody)
    })
        .then((res) => res.json().then((data) => ({status: res.status, body: data})))
        .then((data) => {
            // On successful login set logged in status to 'true' and navigate to root url
            if (data.status === 200)
            {
                setIsLoggedIn(true)
                navigate("/")
            }
        })
        .catch(console.error)
}

/**
 * @brief The logoutUserUtil() function attempts to log out of the CRM server.
 * @param navigate The useNavigate hook to redirect browser
 * @param setIsLoggedIn React state function to track user login
 */
function logoutUserUtil(navigate, setIsLoggedIn)
{
    const logoutUrl = `${URLS.api}${ENDPOINTS.logout}`          // Logout API endpoint

    fetch(logoutUrl, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then((res) => res.json().then((data) => ({status: res.status, body: data})))
        .then((data) => {
            // On successful logout set logged in status to 'false' and navigate to login url
            if (data.status === 200)
            {
                setIsLoggedIn(false)
                navigate("/login")
            }
        })
        .catch(console.error)
}

/**
 * @brief The showRegisterFormUtil() function shows the register form.
 */
function showRegisterFormUtil()
{
    document.body.classList.add("lock-scroll")
    document.getElementById("register-form--container").classList.add("show")
    document.getElementById("page-mask").classList.add("show")
}

export { loginUserUtil, logoutUserUtil, showRegisterFormUtil }