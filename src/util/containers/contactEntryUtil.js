import { Link } from "react-router-dom"
import { ENDPOINTS } from "../config"

/**
 * @file contactEntryUtil.js
 * @author 0xChristopher
 * @brief This file contains functions that are called when the EntryDetails component accepts an entry
 *      of type 'contact'. It's primary purpose is to return JSX to be rendered.
 */

/**
 * @brief The contactDetails() function takes in a data entry (a contact in this case) as a JSON object and
 *      returns JSX to display its attributes.
 * @param data The data entry object to be displayed
 * @return Returns JSX to be displayed on the page
 */
function contactDetails(data)
{
    const {
        contact,
        user,
        account
    } = data

    const accountUrl = `${ENDPOINTS.accounts}${account.id}`             // Link to corresponding account

    return (
        <div className="entry-details--container">
            <div className="entry-details--main">
                <div className="entry-details--main-upper">
                    <img 
                        src="images/icons/contacticon.png" 
                        alt="contact icon" 
                        className="data-entry--icon" 
                    />
                    <div className="entry-details--header">
                        <span className="entry-details--header-text">Contact</span>
                        <span className="entry-details--header-value">
                            {contact.first_name} {contact.last_name}
                        </span>
                    </div>
                    <div className="entry-details--action-bar">
                        Action Bar
                    </div>
                </div>
                <div className="entry-details--main-lower">
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Title</span>
                        <span className="entry-details--value-borderless">{contact.title}</span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Account Name</span>
                        <span className="entry-details--value-borderless">
                            <Link className="link" to={accountUrl}>
                                {account.account_name}
                            </Link>
                        </span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Phone</span>
                        <span className="entry-details--value-borderless">{contact.phone}</span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Email</span>
                        <span className="entry-details--value-borderless">{contact.email}</span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Contact Owner</span>
                        <span className="entry-details--value-borderless">
                            {user.first_name} {user.last_name}
                        </span>
                    </div>
                </div>
            </div>
            <div className="entry-details--main">
                <div className="entry-details--main-graphic">
                    Graphic
                </div>
            </div>
            <div className="entry-details--panel-container">
                <div className="entry-details--left-panel">
                    <div className="entry-details--left-panel--tabs">
                        Details
                    </div>
                    <div className="entry-details--left-panel--info-container">
                        <div className="entry-details--left-panel--info-col">
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Contact Owner</span>
                                <span className="entry-details--value">
                                    {user.first_name} {user.last_name}
                                </span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Name</span>
                                <span className="entry-details--value">
                                    {contact.first_name} {contact.last_name}
                                </span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Account Name</span>
                                <span className="entry-details--value">
                                    <Link className="link" to={accountUrl}>
                                        {account.account_name}
                                    </Link>
                                </span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Title</span>
                                <span className="entry-details--value">{contact.title}</span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Type</span>
                                <span className="entry-details--value"></span>
                            </div>
                        </div>
                        <div className="entry-details--left-panel--info-col">
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Phone</span>
                                <span className="entry-details--value">{contact.phone}</span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Mobile</span>
                                <span className="entry-details--value"></span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Email</span>
                                <span className="entry-details--value">{contact.email}</span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Reports To</span>
                                <span className="entry-details--value"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="entry-details--right-panel">
                    Activity
                </div>
            </div>
        </div>
    )
}

export { contactDetails }