import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { selectWindow } from "../util/appUtil"
import { URLS, ENDPOINTS } from "../util/config"

/**
 * @file App.js
 * @author 0xChristopher
 * @brief This file imports the main components of the page and returns them as the main 'App'
 *      component.
 */

/**
 * @brief The App() function builds the page app component.
 * @return Returns the app component to be added to the page
 */
function App()
{
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [user, setUser] = React.useState([])

    const refreshUrl = `${URLS.api}${ENDPOINTS.jwtRefresh}`         // JWT Refresh API endpoint
    const userUrl = `${URLS.api}${ENDPOINTS.user}`                  // User session API endpoint
    let location = useLocation()                                    // Current URL path variable
    window.onclick = selectWindow                                   // Window event handler

    /**
     * @brief The useUrl() hook checks the current URL path name and returns relevant props.
     * @returns Returns props to pass to the child component
     */
    const useUrl = () => {
        // Check for updated URL path
        location = useLocation()

        switch(location.pathname)
        {
            case "/login":
                return (setIsLoggedIn)
            default:
                return (user)
        }
    }

    // Set interval to refresh user access token every 3 minutes
    React.useEffect(() => {
        const refreshTokenInterval = setInterval(() => {
            if (isLoggedIn === true)
            {
                fetch(refreshUrl, {
                    method: "POST",
                    mode: "cors",
                    credentials: "include",
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                    .then((res) => res.json().then((data) => ({status: res.status, body: data})))
                    .catch(console.error)
            }
        }, 180000)

        // Clear interval on component dismount
        return () => clearInterval(refreshTokenInterval)
    }, [isLoggedIn, refreshUrl])

    // Retrieve current user's session
    React.useEffect(() => {
        fetch(userUrl, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then((res) => res.json().then((data) => ({status: res.status, body: data})))
            .then((data) => {
                setUser(data)
                console.log(data)
            })
            .catch(console.error)
    }, [userUrl, location])

    return (
        <div className="app-container">
            <Header 
                location={location}
                user={user}
            />
            <Outlet 
                context={useUrl()}
            />
            <Footer 
                location={location}
            />
        </div>
    )
}

export default App