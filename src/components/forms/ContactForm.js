import { Form } from "react-router-dom"
import { addContactUtil } from "../../util/forms/contactFormUtil"

/**
 * @file ContactForm.js
 * @author 0xChristopher
 * @brief This file is responsible for the Contact Form component of the CRM website.
 */

/**
 * @brief The ContactForm() function builds the page contact form component.
 * @return Returns the contact form component to be added to the page
 */
function ContactForm()
{
    // Component functions stored in contactFormUtil
    const addContact = () => addContactUtil()

    return (
        <>
            {/* Page Mask (dimmed background) */}
            <div className="page-mask" id="page-mask" />
            {/* Contact Form */}
            <section className="form-container" id="contact-form--container">
                <div className="form">
                    <div className="form--header">
                        <div className="form--header-text">
                            New Contact
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
                            className="form--input-field"
                            id="contact-form--salutation"
                            type="text"
                        ></input>
                        <div className="form--label">
                            First Name
                        </div>
                        <input
                            className="form--input-field"
                            id="contact-form--first-name"
                            required 
                            type="text"
                        ></input>
                        <div className="form--label">
                            Last Name
                        </div>
                        <input
                            className="form--input-field"
                            id="contact-form--last-name"
                            required
                            type="text"
                        ></input>
                        <div className="form--label">
                            Account Name
                        </div>
                        <input
                            className="form--input-field"
                            id="contact-form--account-name"
                            required
                            type="text"
                        ></input>
                        <div className="form--label">
                            Title
                        </div>
                        <input
                            className="form--input-field"
                            id="contact-form--title"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Reports To
                        </div>
                        <input
                            className="form--input-field"
                            id="contact-form--reports-to"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Description
                        </div>
                        <textarea
                            className="form--input-field"
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
                            className="form--input-field"
                            id="contact-form--phone"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Email
                        </div>
                        <input
                            className="form--input-field"
                            id="contact-form--email"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Email Opt Out
                        </div>
                        <input
                            className="form--input-field-checkbox"
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
                            className="form--input-field"
                            id="contact-form--street"
                            type="text"
                        ></input>
                        <div className="form--label">
                            City
                        </div>
                        <input
                            className="form--input-field"
                            id="contact-form--city"
                            type="text"
                        ></input>
                        <div className="form--label">
                            State/Province
                        </div>
                        <input
                            className="form--input-field"
                            id="contact-form--state-province"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Zip/Postal Code
                        </div>
                        <input
                            className="form--input-field"
                            id="contact-form--zip-postal"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Country
                        </div>
                        <input
                            className="form--input-field"
                            id="contact-form--country"
                            type="text"
                        ></input>
                        <div className="form--footer">
                            <div className="form--footer--button-container">
                                <button 
                                    className="form--footer--button"
                                    id="add-contact--button"
                                    type="submit" 
                                    onClick={addContact}>
                                    Add Contact
                                </button>
                                <button 
                                    className="form--footer--button-end"
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