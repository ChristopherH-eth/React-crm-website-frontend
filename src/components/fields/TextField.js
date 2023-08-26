import React from "react";

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

    // TODO: Add comments and organize below
    const [inputValue, setInputValue] = React.useState(value);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    React.useEffect(() => {
        setInputValue(value)
    }, [value])

    /**
     * @brief The preventNullInput() function prevents newly rendered fields from having null values.
     * @param inputValue The field input value at render
     */
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
                <div className="label">
                    {isRequired && <span className="required" title="required">*</span>}
                    <span>{label}</span>
                </div>
                {isRequired 
                    ?
                        <input
                            className="input-field lead-form--input"
                            id={id}
                            type="text"
                            required
                            value={preventNullInput(inputValue)}
                            onChange={handleInputChange}
                        ></input>
                    :
                        <input
                            className="input-field lead-form--input"
                            id={id}
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                        ></input>
                }
            </div>
        )
    }
    else if (!isEditable)
    {
        return(
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

export default TextField