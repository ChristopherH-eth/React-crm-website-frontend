/**
 * @file CheckBoxField.js
 * @author 0xChristopher
 * @brief This file is responsible for the CheckBoxField component of the CRM website.
 */

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
                <div className="form--label">
                    {isRequired && <span className="required" title="required">*</span>}
                    <span>{label}</span>
                </div>
                <input
                    className="form--input-field-checkbox lead-form--input"
                    id={id}
                    type="checkbox"
                ></input>
            </div>
        )
    }
    if (!isEditable)
    {
        return (
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

export default CheckBoxField