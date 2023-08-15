import React from "react"
import { useNavigate } from "react-router-dom"
import { URLS, ENDPOINTS } from "../../util/config"
import TextField from "../fields/TextField"
import CheckBoxField from "../fields/CheckBoxField"
import TextAreaField from "../fields/TextAreaField"
import Subheader from "../fields/Subheader"

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
        setIsLoggedIn,                                                              // State function for isLoggedIn variable
        layoutName,                                                                 // Name of the layout to request
        user,                                                                       // Current user
        selectedEntry,                                                              // Entry currently selected
        isNew,                                                                      // True if the form is for a new entry
        isEditable                                                                  // True if the field is editable
    } = props

    const [layoutData, setLayoutData] = React.useState()                            // Current layout array

    // useNavigate hook to redirect browser
    const navigate = useNavigate()

    const layoutUrl = `${URLS.api}${ENDPOINTS.layout}/${layoutName}`                // Layout API endpoint

    // Request the current layout
    React.useEffect(() => {
        fetch(layoutUrl, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then((res) => res.json().then((data) => ({status: res.status, body: data})))
            .then((data) => {
                if (data.status === 401)
                {
                    setIsLoggedIn(false)
                    navigate("/login")
                }
                else
                    setLayoutData(JSON.parse(data.body.layout_data))
            })
            .catch(console.error)
    }, [layoutUrl, navigate, setIsLoggedIn])

    /**
     * @brief The fieldType() function builds a field for display on the layout based on its type and
     *      the field data provided.
     * @param dataType The type of field to build
     * @param field The values of the field attributes
     * @returns A field to be placed on the layout
     */
    function fieldType(dataType, field, value)
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
                        value={value}
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
            {layoutData && 
                <div>
                    {layoutData.fields.map((field) => (
                        <div key={field.label}>
                            {/* Pre-fill field values when editing an existing record */}
                            {isNew
                                ?
                                    <div>
                                        {fieldType(field.type, field)}
                                    </div>
                                :
                                    <div>
                                        {selectedEntry && <div>
                                            {fieldType(field.type, field, selectedEntry.lead[field.logical_name])}
                                        </div>}
                                    </div>
                            }
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Layout