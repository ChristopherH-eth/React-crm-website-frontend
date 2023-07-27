/**
 * @file TextField.js
 * @author 0xChristopher
 * @brief This file is responsible for the TextField component of the CRM website.
 */

/**
 * 
 * @brief The TextField() function builds a text field component.
 * @return Returns the text field component to be added to the page
 */
function TextField(props)
{
    const {
        label,
        value
    } = props

    return(
        <div>
            <div className="form--label">
                {label}
            </div>
            <div className="form--text">
                {value}
            </div>
        </div>
    )
}

export default TextField