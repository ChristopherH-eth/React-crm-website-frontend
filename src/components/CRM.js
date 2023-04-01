import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "../components/App"
import ErrorPage from "../components/ErrorPage"
import Main from "../components/Main"
import Contacts from "../components/Contacts"
import Accounts from "../components/Accounts"
import Leads from "../components/Leads"
import AccountForm from "../components/forms/AccountForm"
import ContactForm from "../components/forms/ContactForm"
import LeadForm from "../components/forms/LeadForm"
import Login from "../components/Login"
import { URLS, ENDPOINTS } from "../util/config"

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
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [user, setUser] = React.useState([])

    const refreshUrl = `${URLS.api}${ENDPOINTS.jwtRefresh}`         // JWT Refresh API endpoint
    const loginPath = ENDPOINTS.login

    console.log(window.location.pathname)

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
                    if (data.status === 401 && window.location.pathname !== loginPath)
                    {
                        window.location.pathname = loginPath
                    }
                })
                .catch(console.error)
        }, 180000)

        // Clear interval on component dismount if interval is still set
        return () => {
            if (refreshTokenInterval)
                clearInterval(refreshTokenInterval)
        }
    }, [isLoggedIn, refreshUrl, loginPath])

    // Browser router for url based routing in React
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App
                setIsLoggedIn={setIsLoggedIn}
                user={user}
                setUser={setUser}
            />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Main />
                },
                {
                    path: "login/",
                    element: <Login />,
                    errorElement: <ErrorPage />
                },
                {
                    path: "contacts/",
                    element: <><Contacts /><ContactForm /></>
                },
                {
                    path: "accounts/",
                    element: <><Accounts /><AccountForm /></>
                },
                {
                    path: "leads/",
                    element: <><Leads /><LeadForm /></>
                }
            ]
        }
    ])

    return (
        <RouterProvider router = {router} />
    )
}

export default CRM