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

    return (
        <>
            {location.pathname !== loginPath ? (
                <header className="header">
                    <div className="header--title">
                        CRM Website
                    </div>
                    <nav className="header--navigation">
                        <ul className="header--navigation--list">
                            <li className="header--navigation--list--item">
                                <Link className="link" to={"/"}>Home</Link>
                            </li>
                            <li className="header--navigation--list--item">
                                <Link className="link" to={"accounts/"}>Accounts</Link>
                            </li>
                            <li className="header--navigation--list--item">
                                <Link className="link" to={"contacts/"}>Contacts</Link>
                            </li>
                            <li className="header--navigation--list--item">
                                <Link className="link" to={"/"}>Sales</Link>
                            </li>
                            <li className="header--navigation--list--item">
                                <Link className="link" to={"/"}>Outreach</Link>
                            </li>
                            <li className="header--navigation--list--item">
                                <Link className="link" to={"/"}>Service</Link>
                            </li>
                            <li className="header--navigation--list--item">
                                <Link className="link" to={"/"}>Calendar</Link>
                            </li>
                            <li className="header--navigation--list--item">
                                <Link className="link" to={"/"}>Dashboards</Link>
                            </li>
                            <li className="header--navigation--list--item">
                                <Link className="link" to={"/"}>Reports</Link>
                            </li>
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