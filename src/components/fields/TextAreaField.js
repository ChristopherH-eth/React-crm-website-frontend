import React from "react"
import { preventNullInputUtil } from "../../util/fields/fieldUtil"

/**
 * @file TextAreaField.js
 * @author 0xChristopher
 * @brief This file is responsible for the TextAreaField component of the CRM website.
 */

// TODO: Make input field class name dynamic by using type instead.

/**
 * @brief The TextAreaField() function builds a text area field component.
 * @return Returns the text area field component to be added to the page
 */
function TextAreaField(props)
{
    const {
        id,                                                                 // Input element ID
        label,                                                              // Name of field to display
        value,                                                              // Current field value
        rows,                                                               // Number of rows to display
        isEditable,                                                         // True if field can be edited
        isRequired                                                          // True if field is required
    } = props

    const [inputValue, setInputValue] = React.useState(value)               // State variable for input value

    // Component functions stored in fieldUtil
    const preventNullInput = () => preventNullInputUtil(inputValue)

    // Input element handler function to make mutable
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    // Detect changes in component input value
    React.useEffect(() => {
        setInputValue(value)
    }, [value])

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
                        <textarea
                            className="input-field leads-form--input"
                            id={id}
                            rows={rows}
                            type="text"
                            required
                            value={preventNullInput(value)}
                            onChange={handleInputChange}
                        ></textarea>
                    :
                        <textarea
                            className="input-field leads-form--input"
                            id={id}
                            rows={rows}
                            type="text"
                            value={preventNullInput(value)}
                            onChange={handleInputChange}
                        ></textarea>
                }
            </div>
        )
    }
    else if(!isEditable)
    {
        return (
            <div>
                <div className="label">
                    {label}
                </div>
                <textarea
                    className="text"
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