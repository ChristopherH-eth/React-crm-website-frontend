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
        id,                                         // Input element ID
        label,                                      // Name of field to display
        value,                                      // Current field value
        isEditable,                                 // True if field can be edited
        isRequired                                  // True if field is required
    } = props

    // TODO: Add comments and move to field util file
    function preventNullInput(inputValue)
    {
        if (inputValue === null)
            return ""
        else
            return inputValue
    }

    // Check if the field is currently editable
    if(isEditable)
    {
        return(
            <div>
                <div className="form--label">
                    {isRequired && <span className="required" title="required">*</span>}
                    <span>{label}</span>
                </div>
                {isRequired 
                    ?
                        <input
                            className="form--input-field lead-form--input"
                            id={id}
                            type="text"
                            required
                            defaultValue={preventNullInput(value)}
                        ></input>
                    :
                        <input
                            className="form--input-field lead-form--input"
                            id={id}
                            type="text"
                            defaultValue={value}
                        ></input>
                }
            </div>
        )
    }
    else if (!isEditable)
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
}

export default TextField