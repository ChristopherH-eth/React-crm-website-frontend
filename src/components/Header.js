import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { logoutUserUtil } from "../util/loginUtil"

/**
 * @file Header.js
 * @author 0xChristopher
 * @brief This file is responsible for the Header component of the CRM website.
 */

/**
 * @brief The Header() function builds the page header component.
 * @return Returns the header component to be added to the page
 */
function Header(props)
{
    const {
        location,
        user,
        setIsLoggedIn
    } = props

    // Path to login page
    const loginPath = "/login"

    // useNavigate hook to redirect browser
    const navigate = useNavigate()

    // Component functions stored in loginUtil
    const logoutUser = () => logoutUserUtil(navigate, setIsLoggedIn)

    // Select nav bar button of current URL
    React.useEffect(() => {
        const currentUrl = window.location.href                         // URL of current page
        const currentQueryString = window.location.search               // Query string of current URL
        const navButtons = document.querySelectorAll(".link")           // All nav bar links

        // Check URLs
        navButtons.forEach(link => {
            // Check the current URL
            if (link.href === currentUrl)
            {
                const linkChild = link.querySelector(".header--navigation--list--item")
                linkChild.classList.add("header--navigation--list--item-active")
            }
            // Check for non-empty query strings
            else if (link.href.indexOf(currentQueryString) !== -1 && currentQueryString !== "")
            {
                const linkChild = link.querySelector(".header--navigation--list--item")
                linkChild.classList.add("header--navigation--list--item-active")
            }
            // No match, so link is not active page
            else
            {
                const linkChild = link.querySelector(".header--navigation--list--item")
                linkChild.classList.remove("header--navigation--list--item-active")
            }
        })
    }, [location])

    return (
        <>
            {location.pathname !== loginPath ? (
                <header className="header">
                    <div className="header--title">
                        CRM Website
                    </div>
                    <nav className="header--navigation">
                        <ul className="header--navigation--list">
                            <Link className="link" to={"/"}>
                                <li className="header--navigation--list--item">
                                    Home
                                </li>
                            </Link>
                            <Link className="link" to={"accounts/"}>
                                <li className="header--navigation--list--item">
                                    Accounts
                                </li>
                            </Link>
                            <Link className="link" to={"contacts/"}>
                                <li className="header--navigation--list--item">
                                    Contacts
                                </li>
                            </Link>
                            <Link className="link" to={"/"}>
                                <li className="header--navigation--list--item">
                                    Sales
                                </li>
                            </Link>
                            <Link className="link" to={"/"}>
                                <li className="header--navigation--list--item">
                                    Outreach
                                </li>
                            </Link>
                            <Link className="link" to={"/"}>
                                <li className="header--navigation--list--item">
                                    Service
                                </li>
                            </Link>
                            <Link className="link" to={"/"}>
                                <li className="header--navigation--list--item">
                                    Calendar
                                </li>
                            </Link>
                            <Link className="link" to={"/"}>
                                <li className="header--navigation--list--item">
                                    Dashboards
                                </li>
                            </Link>
                            <Link className="link" to={"/"}>
                                <li className="header--navigation--list--item">
                                    Reports
                                </li>
                            </Link>
                        </ul>
                    </nav>
                    <div className="header--welcome">
                        Welcome, {user}!
                    </div>
                    <div className="header--logout-button-container">
                        <button
                            onClick={logoutUser}
                            type="submit"
                        >
                            Logout
                        </button>
                    </div>
                </header>
            ) : (
                <div></div>
            )}
        </>
    )
}

export default Header