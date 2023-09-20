import React from "react"
import { useNavigate } from "react-router-dom"
import { URLS, ENDPOINTS } from "../../util/config"
import { fieldTypeUtil } from "../../util/layouts/layoutsUtil"

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
        isEditable,                                                                 // True if the field is editable
        type                                                                        // Data type from form
    } = props

    const [layoutData, setLayoutData] = React.useState()                            // Current layout array

    // useNavigate hook to redirect browser
    const navigate = useNavigate()

    // Component functions stored in layoutsUtil
    const fieldType = (dataType, field, value) => fieldTypeUtil(dataType, field, value, isEditable, type)

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

    console.log(isNew)

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
                                        {fieldType(field.field_type, field)}
                                    </div>
                                :
                                    <div>
                                        {selectedEntry && <div>
                                            {fieldType(field.field_type, field, selectedEntry[type][field.logical_name])}
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