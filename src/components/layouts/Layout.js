import TextField from "../fields/TextField"
import CheckBoxField from "../fields/CheckBoxField"
import TextAreaField from "../fields/TextAreaField"

/**
 * @file Layout.js
 * @author 0xChristopher
 * @brief This file is responsible for the Layout component of the CRM website.
 */

/**
 * @brief The Layout() function builds a layout component.
 * @return Returns the layout component to be added to the page
 */
function Layout(props)
{
    const {
        customLayout
    } = props

    // A test layout for the RegisterForm component
    const layout = {
        fields: [
            {
                id: "register-form--first-name",
                logical_name: "first_name",
                type: "text",
                dataType: "text",
                label: "First Name",
                col: 1,
                row: 1,
                required: true
            }, 
            {
                id: "register-form--last-name",
                logical_name: "last_name",
                type: "text",
                dataType: "text",
                label: "Last Name",
                col: 1,
                row: 1,
                required: true
            }, 
            {
                id: "register-form--email",
                logical_name: "email",
                type: "email",
                dataType: "email",
                label: "Email",
                col: 1,
                row: 1,
                required: true
            }, 
            {
                id: "register-form--password",
                logical_name: "password",
                type: "password",
                dataType: "password",
                label: "Password",
                col: 1,
                row: 1,
                required: true
            }, 
            {
                id: "register-form--confirm-password",
                logical_name: "confirm_password",
                type: "password",
                dataType: "password",
                label: "Confirm Password",
                col: 1,
                row: 1,
                required: true
            }
        ]
    }

    // True if the field is editable
    const isEditable = true

    /**
     * @brief The fieldType() function builds a field for display on the layout based on its type and
     *      the field data provided.
     * @param dataType The type of field to build
     * @param field The values of the field attributes
     * @returns A field to be placed on the layout
     */
    function fieldType(dataType, field)
    {
        switch(dataType)
        {
            case "text":
            case "email":
            case "password":
                return (
                    <TextField 
                        id={field.id}
                        label={field.label}
                        isEditable={isEditable}
                        isRequired={field.required}
                    />
                )
            case "checkbox":
                return (
                    <CheckBoxField 
                        id={field.id}
                        label={field.label}
                        isEditable={isEditable}
                        isRequired={field.required}
                    />
                )
            case "textarea":
                return (
                    <TextAreaField
                        id={field.id}
                        label={field.label}
                        isEditable={isEditable}
                        isRequired={field.required}
                    />
                )
            default:
                break
        }
    }

    return (
        <div>
            {layout.fields.map((field) => (
                <div key={field.name}>
                    {fieldType(field.type, field)}
                </div>
            ))}
        </div>
    )
}

export default Layout