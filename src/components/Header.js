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