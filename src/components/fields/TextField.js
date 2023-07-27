/**
 * @file TextField.js
 * @author 0xChristopher
 * @brief This file is responsible for the TextField component of the CRM website.
 */

/**
 * @brief The TextField() function builds a text field component.
 * @return Returns the text field component to be added to the page
 */
function TextField(props)
{
    const {
        id,
        label,
        value,
        isEditable,
        isRequired
    } = props

    // Check if the field is currently editable
    if (!isEditable)
    {
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
    else if(isEditable)
    {
        return(
            <div>
                <div className="form--label">
                    {isRequired && <span className="required" title="required">*</span>}
                    <span>{label}</span>
                </div>
                <input
                    className="form--input-field lead-form--input"
                    id={id}
                    type="text"
                ></input>
            </div>
        )
    }
}

export default TextField