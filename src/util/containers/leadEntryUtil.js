import ActionBar from "../../components/elements/ActionBar"
import CheckBoxField from "../../components/fields/CheckBoxField"
import Layout from "../../components/layouts/Layout"

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
 * @param type Data type for Layout
 * @return Returns JSX to be displayed on the page
 */
function leadDetails(data, actionBar, type)
{
    // TODO: These destructured props can be removed once the common area has been built in the layout
    const {
        leads,                                               // Current lead entry
        users                                                // Linked user entry
    } = data

    const isEditable = false

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
                            {leads.first_name} {leads.last_name}
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
                        <span className="entry-details--value-borderless">{leads.title}</span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Company</span>
                        <span className="entry-details--value-borderless"></span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Phone</span>
                        <span className="entry-details--value-borderless">{leads.phone}</span>
                    </div>
                    <div className="entry-details--main-lower--element">
                        <span className="entry-details--text">Email</span>
                        <span className="entry-details--value-borderless">{leads.email}</span>
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
                    {/* TODO: Pull isNew and setIsLoggedIn variables in */}
                    <Layout
                        // setIsLoggedIn={setIsLoggedIn}
                        layoutName={type}
                        user={users}
                        selectedEntry={data}
                        isNew={false}
                        isEditable={isEditable}
                        type={type}
                    />
                    {/* <div className="entry-details--left-panel--info-container">
                        <div className="entry-details--left-panel--info-col">
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Lead Owner</span>
                                <span className="entry-details--value">
                                    {users.first_name} {users.last_name}
                                </span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Name</span>
                                <span className="entry-details--value">{leads.account_id}</span>
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
                                {/* Testing non-editable Checkbox field */}{/**
                                <span className="entry-details--text">
                                    <CheckBoxField
                                        label={"Follow Up?"}
                                        value={1}
                                        isEditable={false}
                                        isRequired={false}
                                    />
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
                                <span className="entry-details--value">{leads.phone}</span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Email</span>
                                <span className="entry-details--value">{leads.email}</span>
                            </div>
                            <div className="entry-details--left-panel--info">
                                <span className="entry-details--text">Rating</span>
                                <span className="entry-details--value"></span>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="entry-details--right-panel">
                    Activity
                </div>
            </div>
        </div>
    )
}

export { leadDetails }