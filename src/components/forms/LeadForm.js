import { Form } from "react-router-dom"
import { addLeadUtil } from "../../util/forms/leadFormUtil"

/**
 * @file LeadForm.js
 * @author 0xChristopher
 * @brief This file is responsible for the Lead Form component of the CRM website.
 */

/**
 * @brief The LeadForm() function builds the page lead form component.
 * @return Returns the lead form component to be added to the page
 */
function LeadForm()
{
    // Component functions stored in leadFormUtil
    const addLead = () => addLeadUtil()

    return (
        <>
            {/* Page Mask (dimmed background) */}
            <div className="page-mask" id="page-mask" />
            {/* Lead Form */}
            <section className="form-container" id="lead-form--container">
                <div className="form">
                    <div className="form--header">
                        <div className="form--header-text">
                            New Lead
                        </div>
                    </div>
                    <Form className="form--form">
                        {/* General info section */}
                        <div className="form--subheader">
                            About
                        </div>
                        <div className="form--label">
                            Salutation
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--salutation"
                            type="text"
                        ></input>
                        <div className="form--label">
                            First Name
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--first-name"
                            required 
                            type="text"
                        ></input>
                        <div className="form--label">
                            Last Name
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--last-name"
                            required
                            type="text"
                        ></input>
                        <div className="form--label">
                            Company
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
                            required
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
                            Lead Status
                        </div>
                        <input
                            className="form--input-field lead-form--input"
                            id="lead-form--status"
                            required
                            type="text"
                        ></input>
                        {/* Lead info section */}
                        <div className="form--subheader">
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
                            Email Opt Out
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
                        ></input>
                        <div className="form--footer-border" />
                        <div className="form--footer-container">
                            <div className="button--container">
                                <button 
                                    id="add-lead--button"
                                    type="submit" 
                                    onClick={addLead}>
                                    Add Lead
                                </button>
                            </div>
                            <div className="button--container">
                                <button 
                                    className="secondary-button"
                                    type="button"
                                    id="form--cancel">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </section>
        </>
    )
}

export default LeadForm