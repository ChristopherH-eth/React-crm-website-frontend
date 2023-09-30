import React from "react"

/**
 * @file CheckBoxField.js
 * @author 0xChristopher
 * @brief This file is responsible for the CheckBoxField component of the CRM website.
 */

// TODO: May need to make all field classes dynamic for spacing in editable and non-editable elements.

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
        isRequired,                                 // True if field is required
        type                                        // Data type from layout
    } = props

    const [inputValue, setInputValue] = React.useState(value)               // State variable for input value

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
                <div className="form-label">
                    {isRequired && <span className="required" title="required">*</span>}
                    <span>{label}</span>
                </div>
                {isRequired
                    ?
                        <input
                            className={`input-field-checkbox ${type}-form--input`}
                            id={id}
                            type="checkbox"
                            required
                            checked={inputValue}
                            onChange={handleInputChange}
                        ></input>
                    :
                        <input
                            className={`input-field-checkbox ${type}-form--input`}
                            id={id}
                            type="checkbox"
                            checked={inputValue}
                            onChange={handleInputChange}
                        ></input>
                }   
            </div>
        )
    }
    else if (!isEditable)
    {
        return (
            <div>
                <div className="form-label">
                    {label}
                </div>
                <div className="form-text">
                    {value === 1 
                        ? 
                            <img 
                                className="field-checkmark"
                                src="/images/icons/checkmark.png"
                                alt="checkmark"
                            /> 
                        : 
                            ""
                    }
                </div>
            </div>
        )
    }
}

export default CheckBoxField