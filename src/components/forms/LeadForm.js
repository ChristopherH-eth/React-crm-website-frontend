import React from "react"
import { addLeadUtil } from "../../util/forms/leadFormUtil"
import { destroyFormUtil } from "../../util/util"
import Layout from "../layouts/Layout"
import TextField from "../fields/TextField"

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
    const isRequired = true                                 // Make a field required

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
                        {/* General info section */}
                        {/*<div className="form--subheader">
                            Lead Information
                        </div>
                        <TextField
                            label={"Lead Owner"}
                            value={isNew ? user.full_name : (selectedEntry ? selectedEntry.user.full_name : "")}
                        />
                        <TextField
                            id={"lead-form--salutation"}
                            label={"Salutation"}
                            value={isNew ? "" : selectedEntry.lead.salutation}
                            isEditable={isEditable}
                            isRequired={isRequired}
                        />
                        <div className="form--label">
                            <span className="required" title="required">*</span>
                            <span>First Name</span>
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--first-name"
                            required 
                            type="text"
                        ></input>
                        <div className="form--label">
                            <span className="required" title="required">*</span>
                            <span>Last Name</span>
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--last-name"
                            required
                            type="text"
                        ></input>
                        <div className="form--label">
                            <span className="required" title="required">*</span>
                            <span>Company</span>
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--company"
                            required
                            type="text"
                        ></input>
                        <div className="form--label">
                            Title
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--title"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Website
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--website" 
                            type="text"
                        ></input>
                        <div className="form--label">
                            Description
                        </div>
                        <textarea
                            className="form--input-field lead-form--input"
                            id="lead-form--description"
                            rows={5}
                            type="text"
                        ></textarea>
                        <div className="form--label">
                            <span className="required" title="required">*</span>
                            <span>Lead Status</span>
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--status"
                            required
                            type="text"
                        ></input>/*}
                        {/* Lead info section */}
                        {/* <div className="form--subheader">
                            Get In Touch
                        </div>
                        <div className="form--label">
                            Phone
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--phone"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Email
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--email"
                            type="text"
                        ></input>
                        <div className="form--label">
                            <span className="required" title="required">*</span>
                            <span>Email Opt Out</span>
                        </div>
                        <input
                            className="form--input-field-checkbox lead-form--input"
                            id="lead-form--email-opt-out"
                            type="checkbox"
                        ></input>
                        <div className="form--subheader">
                            Address
                        </div>
                        <div className="form--label">
                            Street
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--street"
                            type="text"
                        ></input>
                        <div className="form--label">
                            City
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--city"
                            type="text"
                        ></input>
                        <div className="form--label">
                            State/Province
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--state-province"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Zip/Postal Code
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--zip-postal"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Country
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--country"
                            type="text"
                        ></input>
                        <div className="form--subheader">
                            Segment
                        </div>
                        <div className="form--label">
                            No. of Employees
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--no-of-employees"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Annual Revenue
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--annual-revenue"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Lead Source
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--source"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Industry
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--industry"
                            type="text"
                        ></input> */}
                        <Layout
                            setIsLoggedIn={setIsLoggedIn}
                            layoutName={layoutName}
                            user={user}
                            selectedEntry={selectedEntry}
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