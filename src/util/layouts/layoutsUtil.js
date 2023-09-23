import TextField from "../../components/fields/TextField"
import CheckBoxField from "../../components/fields/CheckBoxField"
import TextAreaField from "../../components/fields/TextAreaField"
import Subheader from "../../components/fields/Subheader"

/**
 * @file layoutsUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the Layouts component.
 */

/**
 * @brief The fieldType() function builds a field for display on the layout based on its type and
 *      the field data provided.
 * @param dataType The type of field to build
 * @param field The values of the field attributes
 * @param user The User object of the currently logged in user
 * @param value The value of a given field as determined by the selected entry
 * @param isEditable True if the field is in an editable state
 * @param type The type attribute of the input or field element
 * @returns A field to be placed on the layout
 */
function fieldTypeUtil(dataType, field, user, value, isEditable, type)
{
    switch(dataType)
    {
        case "subheader":
            return (
                <Subheader
                    label={field.label}
                />
            )
        case "text":
        case "email":
        case "password":
            return (
                <TextField 
                    id={field.id}
                    label={field.label}
                    value={(field.label).slice(-5, ) === "Owner" ? user.full_name : value}
                    isEditable={(field.label).slice(-5, ) === "Owner" ? false : isEditable}
                    isRequired={field.options.isRequired}
                    type={type}
                />
            )
        case "checkbox":
            return (
                <CheckBoxField 
                    id={field.id}
                    label={field.label}
                    value={value}
                    isEditable={isEditable}
                    isRequired={field.options.isRequired}
                    type={type}
                />
            )
        case "textarea":
            return (
                <TextAreaField
                    id={field.id}
                    label={field.label}
                    value={value}
                    isEditable={isEditable}
                    isRequired={field.options.isRequired}
                    type={type}
                />
            )
        default:
            break
    }
}

export { fieldTypeUtil }