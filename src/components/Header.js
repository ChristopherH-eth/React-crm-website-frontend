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
        const navButtons = document.querySelectorAll("#header-link")    // All nav bar links

        // Check URLs
        navButtons.forEach(link => {
            // Check the home URL
            if (currentUrl === link.href)
            {
                const linkChild = link.querySelector(".navigation--list--item")
                linkChild.classList.add("navigation--list--item-active")
            }
            // Check the current URL if not on home page
            else if (currentUrl.includes(link.href) && link.pathname !== "/")
            {
                const linkChild = link.querySelector(".navigation--list--item")
                linkChild.classList.add("navigation--list--item-active")
            }
            // Check for non-empty query strings
            else if (link.href.indexOf(currentQueryString) !== -1 && currentQueryString !== "")
            {
                const linkChild = link.querySelector(".navigation--list--item")
                linkChild.classList.add("navigation--list--item-active")
            }
            // No match, so link is not active page
            else
            {
                const linkChild = link.querySelector(".navigation--list--item")
                linkChild.classList.remove("navigation--list--item-active")
            }
        })
    }, [location])

    return (
        <div>
            {location.pathname !== loginPath ? (
                <header className="header">
                    <div className="title--container">
                        <img 
                            className="title--logo" 
                            src="/images/logos/crmlogo.png" 
                            alt="crm logo"
                        />
                        <span>CRM Website</span>
                    </div>
                    <div className="navigation--container">
                        <div className="navigation--upper"></div>
                        <div className="navigation--lower">
                            <nav className="navigation">
                                <ul className="navigation--list">
                                    <Link className="link" id="header-link" to={"/"}>
                                        <li className="navigation--list--item">
                                            <span>Home</span>
                                        </li>
                                    </Link>
                                    <Link className="link" id="header-link" to={"leads/page/"}>
                                        <li className="navigation--list--item">
                                            <span>Leads</span>
                                        </li>
                                    </Link>
                                    <Link className="link" id="header-link" to={"accounts/page/"}>
                                        <li className="navigation--list--item">
                                            <span>Accounts</span>
                                        </li>
                                    </Link>
                                    <Link className="link" id="header-link" to={"contacts/page/"}>
                                        <li className="navigation--list--item">
                                            <span>Contacts</span>
                                        </li>
                                    </Link>
                                    <Link className="link" id="header-link" to={"javascript:void(0)"}>
                                        <li className="navigation--list--item">
                                            <span>Sales</span>
                                        </li>
                                    </Link>
                                    <Link className="link" id="header-link" to={"javascript:void(0)"}>
                                        <li className="navigation--list--item">
                                            <span>Outreach</span>
                                        </li>
                                    </Link>
                                    <Link className="link" id="header-link" to={"javascript:void(0)"}>
                                        <li className="navigation--list--item">
                                            <span>Service</span>
                                        </li>
                                    </Link>
                                    <Link className="link" id="header-link" to={"javascript:void(0)"}>
                                        <li className="navigation--list--item">
                                            <span>Calendar</span>
                                        </li>
                                    </Link>
                                    <Link className="link" id="header-link" to={"javascript:void(0)"}>
                                        <li className="navigation--list--item">
                                            <span>Dashboards</span>
                                        </li>
                                    </Link>
                                    <Link className="link" id="header-link" to={"javascript:void(0)"}>
                                        <li className="navigation--list--item">
                                            <span>Reports</span>
                                        </li>
                                    </Link>
                                </ul>
                            </nav>
                            <div className="welcome--container">
                                <div className="welcome">
                                    {user && <span>Welcome, {user.first_name}!</span>}
                                </div>
                                <div className="logout-button-container">
                                    <button
                                        onClick={logoutUser}
                                        type="submit"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            ) : (
                <header></header>
            )}
        </div>
    )
}

export default Header