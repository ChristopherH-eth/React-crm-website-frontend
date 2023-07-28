/**
 * @file TextAreaField.js
 * @author 0xChristopher
 * @brief This file is responsible for the TextAreaField component of the CRM website.
 */

/**
 * @brief The TextAreaField() function builds a text area field component.
 * @return Returns the text area field component to be added to the page
 */
function TextAreaField(props)
{
    const {
        id,                                         // Input element ID
        label,                                      // Name of field to display
        value,                                      // Current field value
        rows,                                       // Number of rows to display
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
                {isRequired
                    ?
                        <textarea
                            className="form--input-field lead-form--input"
                            id={id}
                            rows={rows}
                            type="text"
                            required
                        ></textarea>
                    :
                        <textarea
                            className="form--input-field lead-form--input"
                            id={id}
                            rows={rows}
                            type="text"
                        ></textarea>
                }
            </div>
        )
    }
    else if(!isEditable)
    {
        return (
            <div>
                <div className="form--label">
                    {label}
                </div>
                <textarea
                    className="form--text"
                    rows={rows}
                    type="text"
                    readOnly
                >
                    {value}
                </textarea>
            </div>
        )
    }
}

export default TextAreaField