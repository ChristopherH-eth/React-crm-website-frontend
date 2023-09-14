import ActionBar from "../components/elements/ActionBar"

/**
 * @file collectionsUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the Collections component.
 */

/**
 * @brief The showFormUtil() function shows the new form for the current collection.
 */
function showFormUtil()
{
    document.body.classList.add("lock-scroll")
    document.getElementById("collection-form--container").classList.add("show")
    document.getElementById("page-mask").classList.add("show")
}

/**
 * @brief The accountHeadingUtil() function sets the JSX for the Accounts table heading.
 * @param type Data type of the current collection
 * @param collectionData Current collection of entries
 * @param actionBar Current action bar JSON object
 * @param setIsNew State function for isNew variable
 * @returns Returns the Accounts table heading
 */
function getHeadingUtil(type, collectionData, actionBar, setIsNew)
{
    const newFormFlag = true                                            // Flag to set the value of isNew form status

    const title = () => type.charAt(0).toUpperCase() + type.slice(1)    // Capitalize the first letter of type
    const showForm = () => {
        showFormUtil()
        setIsNew(newFormFlag)
    }                                                                   // showFormUtil callback function

    return (
        <div className="table-heading">
            <div>
                <div className="table-heading-container">
                    <img 
                        className="table-heading-icon" 
                        src={`/images/icons/${type}Icon.png`}
                        alt={type} 
                    />
                    <span className="table-heading-text">{title()}</span>
                </div>
                <div>
                    <span className="table-text">
                        {collectionData.length} {collectionData.length === 1 ? "item" : "items"} selected
                    </span>
                </div>
            </div>
            <ActionBar 
                showForm={showForm} 
                actionBar={actionBar}
            />
        </div>
    )
}

export { getHeadingUtil, showFormUtil }