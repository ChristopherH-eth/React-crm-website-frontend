import ActionBar from "../../components/elements/ActionBar"

/**
 * @file leadEntryUtil.js
 * @author 0xChristopher
 * @brief This file contains functions that are called when the EntryDetails component accepts an entry
 *      of type 'lead'. It's primary purpose is to return JSX to be rendered.
 */

/**
 * @brief The leadDetails() function takes in a data entry (a lead in this case) as a JSON object and
 *      returns JSX to display its attributes.
 * @param data The data entry object to be displayed
 * @param actionBar The entry action bar
 * @return Returns JSX to be displayed on the page
 */
function leadDetails(data, actionBar)
{
    const {
        lead,                                               // Current lead entry
        user                                                // Linked user entry
    } = data

    return (
        <div className="entry-details--container">
            <div className="entry-details--main">
                <div className="entry-details--main-upper">
                    <img 
                        src="/images/icons/leadsIcon.png" 
                        alt="lead icon" 
                        className="data-entry--icon" 
                    />
                    <div className="entry-details--header">
                        <span className="entry-details--header-text">Lead</span>
                        <span className="entry-details--header-value">
                            {lead.first_name} {lead.last_name}
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
                        <span className="entry-details--text">Title</span>
                        <span className="entry-details--value-borderless">{lead.title}</span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Company</span>
                        <span className="entry-details--value-borderless"></span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Phone</span>
                        <span className="entry-details--value-borderless">{lead.phone}</span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Email</span>
                        <span className="entry-details--value-borderless">{lead.email}</span>
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
                                <span className="entry-details--text">Lead Owner</span>
                                <span className="entry-details--value">
                                    {user.first_name} {user.last_name}
                                </span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Name</span>
                                <span className="entry-details--value">{lead.account_id}</span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Company</span>
                                <span className="entry-details--value"></span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Title</span>
                                <span className="entry-details--value"></span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Follow Up?</span>
                                <span className="entry-details--value">
                                    <input type="checkbox" />
                                </span>
                            </div>
                        </div>
                        <div className="entry-details--left-panel--info-col">
                        <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Lead Status</span>
                                <span className="entry-details--value"></span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Phone</span>
                                <span className="entry-details--value">{lead.phone}</span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Email</span>
                                <span className="entry-details--value">{lead.email}</span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Rating</span>
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

export { leadDetails }