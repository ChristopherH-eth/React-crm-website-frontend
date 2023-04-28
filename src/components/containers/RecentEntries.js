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
        leads,
        contacts,
        accounts
    } = props

    return (
        <>
            <div className="main--component--container">
                <div className="main--component">
                    <div className="main--component--header">
                        <img 
                            className="quick-look--component--icon" 
                            src="images/icons/leadicon.png" 
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
                <div className="main--component">
                    <div className="main--component--header">
                        <img 
                            className="quick-look--component--icon" 
                            src="images/icons/opportunityicon.png" 
                            alt="recent leads icon"
                        />
                        Recent Opportunities
                    </div>
                    <div className="main--component--content">
                        Content
                    </div>
                </div>
                <div className="main--component">
                    <div className="main--component--header">
                        <img 
                            className="quick-look--component--icon" 
                            src="images/icons/contacticon.png" 
                            alt="recent leads icon"
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
            <div className="main--component--container">
                <div className="main--component">
                    <div className="main--component--header">
                        <img 
                            className="quick-look--component--icon" 
                            src="images/icons/accounticon.png" 
                            alt="recent leads icon"
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
                <div className="main--component">
                    <div className="main--component--header">
                        Component
                    </div>
                    <div className="main--component--content">
                        Content
                    </div>
                </div>
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