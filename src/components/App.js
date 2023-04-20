import React from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Header from "./Header"
import { selectWindow } from "../util/appUtil"
import { URLS, ENDPOINTS } from "../util/config"

/**
 * @file App.js
 * @author 0xChristopher
 * @brief This file is responsible for the App component of the CRM website.
 */

/**
 * @brief The App() function builds the page app component.
 * @return Returns the app component to be added to the page
 */
function App(props)
{
    const {
        user,
        setUser
    } = props

    const userUrl = `${URLS.api}${ENDPOINTS.user}`                  // User session API endpoint
    const navigate = useNavigate()                                  // useNavigate hook to redirect browser
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
            default:
                return (user)
        }
    }

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
                if (data.status !== 200)
                    navigate("/login")
                else
                {
                    console.log(data)
                    setUser(data.body[0].user)
                }
            })
            .catch(console.error)
    }, [userUrl, location.pathname, setUser, navigate])

    return (
        <div className="app-container">
            <Header 
                location={location}
                user={user}
            />
            <Outlet 
                context={useUrl()}
            />
        </div>
    )
}

export default App