import TextField from "../fields/TextField"

/**
 * @file Layout.js
 * @author 0xChristopher
 * @brief This file is responsible for the Layout component of the CRM website.
 */

function Layout(props)
{
    const {
        customLayout
    } = props

    const layout = {
        fields: [
            {
                id: "register-form--first-name",
                name: "first_name",
                type: "text",
                label: "First Name",
                col: 1,
                row: 1,
                required: true
            }, 
            {
                id: "register-form--last-name",
                name: "last_name",
                type: "text",
                label: "Last Name",
                col: 1,
                row: 1,
                required: true
            }, 
            {
                id: "register-form--email",
                name: "email",
                type: "email",
                label: "Email",
                col: 1,
                row: 1,
                required: true
            }, 
            {
                id: "register-form--password",
                name: "password",
                type: "password",
                label: "Password",
                col: 1,
                row: 1,
                required: true
            }, 
            {
                id: "register-form--confirm-password",
                name: "confirm_password",
                type: "password",
                label: "Confirm Password",
                col: 1,
                row: 1,
                required: true
            }
        ]
    }

    const isEditable = true

    function fieldType(type, field)
    {
        switch(type)
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