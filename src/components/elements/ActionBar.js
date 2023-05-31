/**
 * @file ActionBar.js
 * @author 0xChristopher
 * @brief This file is responsible for the ActionBar component of the CRM website.
 */

function ActionBar(props)
{
    const {
        showForm                                        // showFormUtil callback function
    } = props

    return (
        <div className="action-bar">
            <div className="button--container">
                <button onClick={showForm}>New</button>
                <button className="secondary-button">View</button>
                <button className="secondary-button">Import</button>
                <button className="secondary-button">Export</button>
                <button className="secondary-button">More</button>
            </div>
        </div>
    )
}

export default ActionBar