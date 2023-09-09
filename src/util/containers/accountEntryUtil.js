import ActionBar from "../../components/elements/ActionBar"

/**
 * @file accountEntryUtil.js
 * @author 0xChristopher
 * @brief This file contains functions that are called when the EntryDetails component accepts an entry
 *      of type 'account'. It's primary purpose is to return JSX to be rendered.
 */

/**
 * @brief The accountDetails() function takes in a data entry (an account in this case) as a JSON object and
 *      returns JSX to display its attributes.
 * @param data The data entry object to be displayed
 * @param actionBar The entry action bar
 * @return Returns JSX to be displayed on the page
 */
function accountDetails(data, actionBar)
{
    const {
        account,                                            // Current account entry
        user                                                // Linked user entry
    } = data

    return (
        <div className="entry-details--container">
            <div className="entry-details--main">
                <div className="entry-details--main-upper">
                    <img 
                        src="/images/icons/accountsIcon.png" 
                        alt="account icon" 
                        className="data-entry--icon" 
                    />
                    <div className="entry-details--header">
                        <span className="entry-details--header-text">Account</span>
                        <span className="entry-details--header-value">
                            {account.account_name}
                        </span>
                    </div>
                    <div className="action-bar">
                        <ActionBar 
                            actionBar={actionBar}
                        />
                    </div>
                </div>
                <div className="entry-details--main-lower">
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Type</span>
                        <span className="entry-details--value-borderless"></span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Phone</span>
                        <span className="entry-details--value-borderless">{account.phone}</span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Website</span>
                        <span className="entry-details--value-borderless">{account.website}</span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Account Owner</span>
                        <span className="entry-details--value-borderless">
                            {user.first_name} {user.last_name}
                        </span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Industry</span>
                        <span className="entry-details--value-borderless"></span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Billing Address</span>
                        <span className="entry-details--value-borderless"></span>
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
                                <span className="entry-details--text">Account Owner</span>
                                <span className="entry-details--value">
                                    {user.first_name} {user.last_name}
                                </span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Account Name</span>
                                <span className="entry-details--value">{account.account_id}</span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Parent Account</span>
                                <span className="entry-details--value"></span>
                            </div>
                        </div>
                        <div className="entry-details--left-panel--info-col">
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Phone</span>
                                <span className="entry-details--value">{account.phone}</span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Fax</span>
                                <span className="entry-details--value"></span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Website</span>
                                <span className="entry-details--value">{account.website}</span>
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

export { accountDetails }