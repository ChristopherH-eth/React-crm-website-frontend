/**
 * @file CheckBoxField.js
 * @author 0xChristopher
 * @brief This file is responsible for the CheckBoxField component of the CRM website.
 */

// TODO: Make input field class name dynamic by using type instead.

/**
 * @brief The CheckBoxField() function builds a check box field component.
 * @return Returns the check box field component to be added to the page
 */
function CheckBoxField(props)
{
    const {
        id,                                         // Input element ID
        label,                                      // Name of field to display
        value,                                      // Current field value
        isEditable,                                 // True if field can be edited
        isRequired                                  // True if field is required
    } = props

    // Check if the field is currently editable
    if (isEditable)
    {
        return (
            <div>
                <div className="label">
                    {isRequired && <span className="required" title="required">*</span>}
                    <span>{label}</span>
                </div>
                {isRequired
                    ?
                        <input
                            className="input-field-checkbox leads-form--input"
                            id={id}
                            type="checkbox"
                            required
                        ></input>
                    :
                        <input
                            className="input-field-checkbox leads-form--input"
                            id={id}
                            type="checkbox"
                        ></input>
                }   
            </div>
        )
    }
    else if (!isEditable)
    {
        return (
            <div>
                <div className="label">
                    {label}
                </div>
                <div className="text">
                    {value}
                </div>
            </div>
        )
    }
}

export default CheckBoxField