import React from "react"
import { addEntryUtil } from "../../util/forms/collectionsFormUtil"
import { destroyFormUtil } from "../../util/util"
import Layout from "../layouts/Layout"
import { useParams } from "react-router-dom"

/**
 * @file CollectionsForm.js
 * @author 0xChristopher
 * @brief This file is responsible for the Collections Form component of the CRM website.
 */

/**
 * @brief The CollectionsForm() function builds the page collections form component.
 * @return Returns the collections form component to be added to the page
 */
function CollectionsForm(props)
{
    const {
        setIsLoggedIn,                                                  // State function for isLoggedIn variable
        user,                                                           // Current user
        isNew,                                                          // True if the form is for a new entry
        selectedEntry                                                   // Entry currently selected
    } = props

    const {
        type                                                            // Data type for form
    } = useParams()

    // Component functions stored in collectionsFormUtil
    const addEntry = () => addEntryUtil(formInputClass, type, formRef)

    // Component functions stored in util
    const destroyForm = () => destroyFormUtil(formInputClass, formRef)

    const formInputClass = `${type}-form--input`                        // Form input fields class
    const formRef = React.useRef(null)                                  // Reference to the Collection Form
    const isEditable = true                                             // Make a field editable
    const trimType = type.charAt(0).toUpperCase() + type.slice(1, -1)   // Capitalize the first letter of type

    return (
        <div>
            {/* Page Mask (dimmed background) */}
            <div className="page-mask" id="page-mask" />
            {/* Collections Form */}
            <section className="form-container" id="collection-form--container">
                <div className="form" ref={formRef}>
                    <div className="form-header">
                        <div className="form-header-text">
                            {isNew
                                ? 
                                    `New ${trimType}`
                                : 
                                    `Edit ${trimType}`
                            }
                        </div>
                    </div>
                    <form>
                        <Layout
                            setIsLoggedIn={setIsLoggedIn}
                            layoutName={type}
                            user={user}
                            selectedEntry={selectedEntry}
                            isNew={isNew}
                            isEditable={isEditable}
                        />
                        <div className="footer-border" />
                        <div className="footer-container">
                            <div className="button--container">
                                <button 
                                    id={`add-${type}--button`}
                                    type="button" 
                                    onClick={addEntry}
                                >
                                    {`Add ${trimType}`}
                                </button>
                                <button 
                                    className="secondary-button"
                                    type="button"
                                    id="form--cancel"
                                    onClick={destroyForm}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default CollectionsForm