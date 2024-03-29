import React from "react"
import { preventNullInputUtil } from "../../util/fields/fieldUtil";

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
        id,                                                                 // Input element ID
        label,                                                              // Name of field to display
        value,                                                              // Current field value
        isEditable,                                                         // True if field can be edited
        isRequired,                                                         // True if field is required
        type                                                                // Data type from layout
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
    if(isEditable)
    {
        return(
            <div>
                <div className="form-label">
                    {isRequired && <span className="required" title="required">*</span>}
                    <span>{label}</span>
                </div>
                {isRequired 
                    ?
                        <input
                            className={`input-field ${type}-form--input`}
                            id={id}
                            type="text"
                            required
                            value={preventNullInput(inputValue)}
                            onChange={handleInputChange}
                        ></input>
                    :
                        <input
                            className={`input-field ${type}-form--input`}
                            id={id}
                            type="text"
                            value={preventNullInput(inputValue)}
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
                <div className="entry-details--text">
                    {label}
                </div>
                <div className="entry-details--value">
                    {value}
                </div>
            </div>
        )
    } 
}

export default TextField