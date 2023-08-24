import React from "react"
import { addLeadUtil } from "../../util/forms/leadFormUtil"
import { destroyFormUtil } from "../../util/util"
import Layout from "../layouts/Layout"

/**
 * @file LeadForm.js
 * @author 0xChristopher
 * @brief This file is responsible for the Lead Form component of the CRM website.
 */

/**
 * @brief The LeadForm() function builds the page lead form component.
 * @return Returns the lead form component to be added to the page
 */
function LeadForm(props)
{
    const {
        setIsLoggedIn,                                      // State function for isLoggedIn variable
        user,                                               // Current user
        isNew,                                              // True if the form is for a new lead
        selectedEntry                                       // Entry currently selected
    } = props

    // Component functions stored in leadFormUtil
    const addLead = () => addLeadUtil()

    // Component functions stored in util
    const destroyForm = () => destroyFormUtil(leadFormInputClass, leadFormRef)

    const leadFormInputClass = "lead-form--input"           // Form input fields class
    const layoutName = "leads"                              // Name of the layout to request
    const leadFormRef = React.useRef(null)                  // Reference to the Lead Form
    const isEditable = true                                 // Make a field editable

    return (
        <div>
            {/* Page Mask (dimmed background) */}
            <div className="page-mask" id="page-mask" />
            {/* Lead Form */}
            <section className="form-container" id="leads-form--container">
                <div className="form" ref={leadFormRef}>
                    <div className="form--header">
                        <div className="form--header-text">
                            {isNew
                                ? 
                                    "New Lead"
                                : 
                                    "Edit Lead"
                            }
                        </div>
                    </div>
                    <form className="form--form">
                        <Layout
                            setIsLoggedIn={setIsLoggedIn}
                            layoutName={layoutName}
                            user={user}
                            selectedEntry={selectedEntry}
                            isNew={isNew}
                            isEditable={isEditable}
                        />
                        <div className="form--footer-border" />
                        <div className="form--footer-container">
                            <div className="button--container">
                                <button 
                                    id="add-lead--button"
                                    type="button" 
                                    onClick={addLead}
                                >
                                    Add Lead
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

export default LeadForm