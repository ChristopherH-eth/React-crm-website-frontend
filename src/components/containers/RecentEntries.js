/**
 * @file RecentEntries.js
 * @author 0xChristopher
 * @brief This file is responsible for the RecentEntries component of the CRM website.
 */

/**
 * @brief The RecentEntries() function builds the page recent entries component.
 * @return Returns the recent entries component to be added to the page
 */
function RecentEntries(props)
{
    const {
        leads,                                          // mapLeads() function from mainUtil
        opportunities,                                  // mapOpps() function from mainUtil
        contacts,                                       // mapContacts() function from mainUtil
        accounts                                        // mapAccounts() function from mainUtil
    } = props

    return (
        <>
            {/* Recent Components First Row */}
            <div className="main--component--container">
                {/* Recent Leads Component */}
                <div className="main--component">
                    <div className="main--component--header">
                        <img 
                            className="quick-look--component--icon" 
                            src="images/icons/leadsIcon.png" 
                            alt="recent leads icon"
                        />
                        Recent Leads
                    </div>
                    <div className="main--component--content">
                        <table className="table-data--table">
                            <tbody>
                                {leads()}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Recent Opportunities Component */}
                <div className="main--component">
                    <div className="main--component--header">
                        <img 
                            className="quick-look--component--icon" 
                            src="images/icons/opportunitiesIcon.png" 
                            alt="recent opportunities icon"
                        />
                        Recent Opportunities
                    </div>
                    <div className="main--component--content">
                    <table className="table-data--table">
                            <tbody>
                                {opportunities()}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Recent Contacts Component */}
                <div className="main--component">
                    <div className="main--component--header">
                        <img 
                            className="quick-look--component--icon" 
                            src="images/icons/contactsIcon.png" 
                            alt="recent contacts icon"
                        />
                        Recent Contacts
                    </div>
                    <div className="main--component--content">
                        <table className="table-data--table">
                            <tbody>
                                {contacts()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Recent Components Second Row */}
            <div className="main--component--container">
                {/* Recent Accounts Component */}
                <div className="main--component">
                    <div className="main--component--header">
                        <img 
                            className="quick-look--component--icon" 
                            src="images/icons/accountsIcon.png" 
                            alt="recent accounts icon"
                        />
                        Recent Accounts
                    </div>
                    <div className="main--component--content">
                        <table className="table-data--table">
                            <tbody>
                                {accounts()}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Recent *** Component */}
                <div className="main--component">
                    <div className="main--component--header">
                        Component
                    </div>
                    <div className="main--component--content">
                        Content
                    </div>
                </div>
                {/* Recent *** Component */}
                <div className="main--component">
                    <div className="main--component--header">
                        Component
                    </div>
                    <div className="main--component--content">
                        Content
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentEntries