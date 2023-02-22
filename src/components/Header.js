import { Link } from "react-router-dom"

/**
 * @file Header.js
 * @author 0xChristopher
 * @brief This file is responsible for the Header component of the CRM website.
 */

/**
 * @brief The Header() function builds the page header component.
 * @return Returns the header component to be added to the page
 */
function Header()
{
    return (
        <header className="header">
            <div>
                CRM Website
            </div>
            <nav className="header--navigation">
                <ul className="header--navigation--list">
                    <li className="header--navigation--list--item">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="header--navigation--list--item">
                        Accounts
                    </li>
                    <li className="header--navigation--list--item">
                        <Link to={"contacts/"}>Contacts</Link>
                    </li>
                    <li className="header--navigation--list--item">
                        Sales
                    </li>
                    <li className="header--navigation--list--item">
                        Outreach
                    </li>
                    <li className="header--navigation--list--item">
                        Service
                    </li>
                    <li className="header--navigation--list--item">
                        Calendar
                    </li>
                    <li className="header--navigation--list--item">
                        Dashboards
                    </li>
                    <li className="header--navigation--list--item">
                        Reports
                    </li>
                </ul>
            </nav>
            <div>
                Welcome, !
            </div>
        </header>
    )
}

export default Header