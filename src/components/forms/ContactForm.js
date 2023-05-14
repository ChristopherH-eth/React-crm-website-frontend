import React from "react"
import DropdownSearch from "../elements/DropdownSearch"
import { Form } from "react-router-dom"
import { addContactUtil } from "../../util/forms/contactFormUtil"
import { URLS, ENDPOINTS } from "../../util/config"

/**
 * @file ContactForm.js
 * @author 0xChristopher
 * @brief This file is responsible for the Contact Form component of the CRM website.
 */

/**
 * @brief The ContactForm() function builds the page contact form component.
 * @return Returns the contact form component to be added to the page
 */
function ContactForm(props)
{
    const {
        user                                                // Current user
    } = props

    // Account variable for dropdown search
    const [accountName, setAccountName] = React.useState("")

    // Accounts API endpoint
    const accountUrl = `${URLS.api}${ENDPOINTS.accounts}`

    // Component functions stored in contactFormUtil
    const addContact = () => addContactUtil(accountName)

    return (
        <>
            {/* Page Mask (dimmed background) */}
            <div className="page-mask" id="page-mask" />
            {/* Contact Form */}
            <section className="form-container" id="contacts-form--container">
                <div className="form">
                    <div className="form--header">
                        <div className="form--header-text">
                            New Contact
                        </div>
                    </div>
                    <Form className="form--form">
                        {/* General info section */}
                        <div className="form--subheader">
                            Contact Information
                        </div>
                        <div className="form--label">
                            Contact Owner
                        </div>
                        <div className="form--text">
                            {user}
                        </div>
                        <div className="form--label">
                            Salutation
                        </div>
                        <input
                            className="form--input-field contact-form--input"
                            id="contact-form--salutation"
                            type="text"
                        ></input>
                        <div className="form--label">
                            <span className="required" title="required">*</span>
                            <span>First Name</span>
                        </div>
                        <input
                            className="form--input-field contact-form--input"
                            id="contact-form--first-name"
                            required 
                            type="text"
                        ></input>
                        <div className="form--label">
                            <span className="required" title="required">*</span>
                            <span>Last Name</span>
                        </div>
                        <input
                            className="form--input-field contact-form--input"
                            id="contact-form--last-name"
                            required
                            type="text"
                        ></input>
                        <div className="form--label">
                            <span className="required" title="required">*</span>
                            <span>Account Name</span>
                        </div>
                        <DropdownSearch 
                            placeholder={"Search..."}
                            nameField={"account_name"}
                            url={accountUrl}
                            onChange={(value) => setAccountName(value)}
                            isSearchable
                        />
                        <div className="form--label">
                            Title
                        </div>
                        <input
                            className="form--input-field contact-form--input"
                            id="contact-form--title"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Reports To
                        </div>
                        <input
                            className="form--input-field contact-form--input"
                            id="contact-form--reports-to"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Description
                        </div>
                        <textarea
                            className="form--input-field contact-form--input"
                            id="contact-form--description"
                            rows={5}
                            type="text"
                        ></textarea>
                        {/* Contact info section */}
                        <div className="form--subheader">
                            Get In Touch
                        </div>
                        <div className="form--label">
                            Phone
                        </div>
                        <input
                            className="form--input-field contact-form--input"
                            id="contact-form--phone"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Email
                        </div>
                        <input
                            className="form--input-field contact-form--input"
                            id="contact-form--email"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Email Opt Out
                        </div>
                        <input
                            className="form--input-field-checkbox contact-form--input"
                            id="contact-form--email-opt-out"
                            type="checkbox"
                        ></input>
                        <div className="form--subheader">
                            Mailing Address
                        </div>
                        <div className="form--label">
                            Street
                        </div>
                        <input
                            className="form--input-field contact-form--input"
                            id="contact-form--street"
                            type="text"
                        ></input>
                        <div className="form--label">
                            City
                        </div>
                        <input
                            className="form--input-field contact-form--input"
                            id="contact-form--city"
                            type="text"
                        ></input>
                        <div className="form--label">
                            State/Province
                        </div>
                        <input
                            className="form--input-field contact-form--input"
                            id="contact-form--state-province"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Zip/Postal Code
                        </div>
                        <input
                            className="form--input-field contact-form--input"
                            id="contact-form--zip-postal"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Country
                        </div>
                        <input
                            className="form--input-field contact-form--input"
                            id="contact-form--country"
                            type="text"
                        ></input>
                        <div className="form--footer-border" />
                        <div className="form--footer-container">
                            <div className="button--container">
                                <button 
                                    id="add-contact--button"
                                    type="submit" 
                                    onClick={addContact}>
                                    Add Contact
                                </button>
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

export default ContactForm