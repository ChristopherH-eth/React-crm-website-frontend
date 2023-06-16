import DropdownMenu from "./DropdownMenu"

/**
 * @file ActionBar.js
 * @author 0xChristopher
 * @brief This file is responsible for the ActionBar component of the CRM website.
 */

/**
 * @brief The ActionBar() function builds the page action bar component.
 * @return Returns the action bar component to be added to the page
 */
function ActionBar(props)
{
    const {
        showForm,                                       // showFormUtil callback function
        actionBar                                       // Current action bar JSON object
    } = props

    return (
        <div className="action-bar">
            <div className="button--container">
                {/* Map Action Bar Buttons */}
                {actionBar.map((action) => (
                    action.text === "New" 
                    ?
                        <button 
                            key={action.id} 
                            onClick={showForm}
                        >
                            {action.text}
                        </button>
                    :
                        action.options.hasMenu === true
                        ?
                            <DropdownMenu 
                                key={action.id}
                                action={action} 
                            />
                        :
                            <button 
                                key={action.id} 
                                className="secondary-button"
                            >
                                {action.text}
                            </button>
                ))}
            </div>
        </div>
    )
}

export default ActionBar