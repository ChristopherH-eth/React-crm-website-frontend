/**
 * @file leadEntryUtil.js
 * @author 0xChristopher
 * @brief This file contains functions that are called when the EntryDetails component accepts an entry
 *      of type 'lead'. It's primary purpose is to return JSX to be rendered.
 */

function leadDetails(dataEntry)
{
    return (
        <div className="entry-details--container">
            <div className="entry-details--main">
                <div className="entry-details--main-upper">
                    <img 
                        src="images/icons/leadicon.png" 
                        alt="lead icon" 
                        className="data-entry--icon" 
                    />
                    <div className="entry-details--header">
                        <span className="entry-details--text">Lead</span>
                        <span>{dataEntry.first_name} {dataEntry.last_name}</span>
                    </div>
                    <div className="entry-details--action-bar">
                        Action Bar
                    </div>
                </div>
                <div className="entry-details--main-lower">
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Title</span>
                        <span>{dataEntry.title}</span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Account Name</span>
                        <span>{dataEntry.account_id}</span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Phone</span>
                        <span>{dataEntry.phone}</span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Email</span>
                        <span>{dataEntry.email}</span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Lead Owner</span>
                        <span>{dataEntry.user_id}</span>
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
                    Details
                </div>
                <div className="entry-details--right-panel">
                    Activity
                </div>
            </div>
        </div>
    )
}

export { leadDetails }