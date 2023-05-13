/**
 * @file opportunityEntryUtil.js
 * @author 0xChristopher
 * @brief This file contains functions that are called when the EntryDetails component accepts an entry
 *      of type 'opportunity'. It's primary purpose is to return JSX to be rendered.
 */

/**
 * @brief The opportunityDetails() function takes in a data entry (an opportunity in this case) as a JSON object and
 *      returns JSX to display its attributes.
 * @param data The data entry object to be displayed
 * @return Returns JSX to be displayed on the page
 */
function opportunityDetails(data)
{
    const {
        opportunity,                                        // Current opportunity entry
        user                                                // Linked user entry
    } = data

    return (
        <div className="entry-details--container">
            <div className="entry-details--main">
                <div className="entry-details--main-upper">
                    <img 
                        src="images/icons/opportunitiesIcon.png" 
                        alt="opportunity icon" 
                        className="data-entry--icon" 
                    />
                    <div className="entry-details--header">
                        <span className="entry-details--header-text">Opportunity</span>
                        <span className="entry-details--header-value">
                            {opportunity.opportunity_name}
                        </span>
                    </div>
                    <div className="entry-details--action-bar">
                        Action Bar
                    </div>
                </div>
                <div className="entry-details--main-lower">
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Type</span>
                        <span className="entry-details--value-borderless"></span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Phone</span>
                        <span className="entry-details--value-borderless">{opportunity.phone}</span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Website</span>
                        <span className="entry-details--value-borderless">{opportunity.website}</span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Opportunity Owner</span>
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
                                <span className="entry-details--text">Opportunity Owner</span>
                                <span className="entry-details--value">
                                    {user.first_name} {user.last_name}
                                </span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Opportunity Name</span>
                                <span className="entry-details--value">{opportunity.opportunity_id}</span>
                            </div>
                        </div>
                        <div className="entry-details--left-panel--info-col">
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Phone</span>
                                <span className="entry-details--value">{opportunity.phone}</span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Fax</span>
                                <span className="entry-details--value"></span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Website</span>
                                <span className="entry-details--value">{opportunity.website}</span>
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

export { opportunityDetails }