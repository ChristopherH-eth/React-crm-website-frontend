/**
 * @file collectionsUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the Collections component.
 */

/**
 * @brief The showFormUtil() function shows the new form for the parameterized type.
 * @param type Data type of the current collection
 */
function showFormUtil(type)
{
    document.body.classList.add("lock-scroll")
    document.getElementById(`${type}-form--container`).classList.add("show")
    document.getElementById("page-mask").classList.add("show")
}

/**
 * @brief The accountHeadingUtil() function sets the JSX for the Accounts table heading.
 * @param type Data type of the current collection
 * @returns Returns the Accounts table heading
 */
function getHeadingUtil(type)
{
    const title = () => type.charAt(0).toUpperCase() + type.slice(1)    // Capitalize the first letter of type
    const showForm = () => showFormUtil(type)                           // showFormUtil callback function

    return (
        <div className="table-data--heading">
            <img 
                className="table-data--heading-icon" 
                src={`images/icons/${type}Icon.png`}
                alt={type} 
            />
            <span className="table-data--heading-text">{title()}</span>
            <div className="table-data--buttons">
                <button onClick={showForm}>New</button>
            </div>
        </div>
    )
}

export { getHeadingUtil }