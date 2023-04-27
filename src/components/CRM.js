import React from "react"
import { RouterProvider } from "react-router-dom"
import { getRouter } from "../routes/routes"
import { URLS, PATHS, ENDPOINTS } from "../util/config"

/**
 * @file CRM.js
 * @author 0xChristopher
 * @brief This file imports the main components of the page and returns them as the main 'CRM'
 *      component.
 */

/**
 * @brief The CRM() function builds the page CRM component.
 * @return Returns the CRM component to be added to the page
 */
function CRM()
{
    const [user, setUser] = React.useState([])

    const router = getRouter(user, setUser)                         // Get routes
    const refreshUrl = `${URLS.api}${ENDPOINTS.jwtRefresh}`         // JWT Refresh API endpoint
    const loginUrl = `${URLS.base}${PATHS.login}`                   // Login URL

    // Set interval to refresh user access token every 3 minutes on component mount
    React.useEffect(() => {
        const refreshTokenInterval = setInterval(() => {
            fetch(refreshUrl, {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
                .then((res) => res.json().then((data) => ({status: res.status, body: data})))
                .then((data) => {
                    // If the user is not logged in, redirect them to the login page
                    if (data.status === 401 && window.location.pathname !== loginUrl)
                        window.location.href = loginUrl
                })
                .catch(console.error)
        }, 180000)

        // Clear interval on component dismount if interval is still set
        return () => {
            if (refreshTokenInterval)
                clearInterval(refreshTokenInterval)
        }
    }, [loginUrl, refreshUrl])

    return (
        <RouterProvider router = {router} />
    )
}

export default CRM