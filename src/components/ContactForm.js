import { Form } from "react-router-dom"
import { addContactUtil } from "../util/contactUtil"

/**
 * @file ContactForm.js
 * @author 0xChristopher
 * @brief This file is responsible for the Contact Form component of the CRM website.
 */

const addContact = () => addContactUtil

function ContactForm()
{
    return (
        <section className="contact-form-container" id="contact-form-container">
            <div className="contact-form">
                <div className="contact-form--header">
                    <div className="contact-form--header-text">
                        New Contact
                    </div>
                </div>
                <Form className="contact-form--form">
                    {/* General info section */}
                    <div className="contact-form--subheader">
                        About
                    </div>
                    <div className="contact-form--label">
                        Salutation
                    </div>
                    <input
                        className="contact-form--input-field"
                        id="contact-form--salutation"
                        placeholder="Salutation"
                        type="text"
                    ></input>
                    <div className="contact-form--label">
                        First Name
                    </div>
                    <input
                        className="contact-form--input-field"
                        id="contact-form--first-name"
                        placeholder="First Name" 
                        type="text"
                    ></input>
                    <div className="contact-form--label">
                        Last Name
                    </div>
                    <input
                        className="contact-form--input-field"
                        id="contact-form--last-name"
                        placeholder="Last Name"
                        type="text"
                    ></input>
                    <div className="contact-form--label">
                        Account Name
                    </div>
                    <input
                        className="contact-form--input-field"
                        id="contact-form--account-name"
                        placeholder="Account Name"
                        type="text"
                    ></input>
                    <div className="contact-form--label">
                        Title
                    </div>
                    <input
                        className="contact-form--input-field"
                        id="contact-form--title"
                        placeholder="Title"
                        type="text"
                    ></input>
                    <div className="contact-form--label">
                        Reports To
                    </div>
                    <input
                        className="contact-form--input-field"
                        id="contact-form--reports-to"
                        placeholder="Reports To"
                        type="text"
                    ></input>
                    <div className="contact-form--label">
                        Description
                    </div>
                    <textarea
                        className="contact-form--input-field"
                        id="contact-form--description"
                        rows={5}
                        type="text"
                    ></textarea>
                    {/* Contact info section */}
                    <div className="contact-form--subheader">
                        Get In Touch
                    </div>
                    <div className="contact-form--label">
                        Phone
                    </div>
                    <input
                        className="contact-form--input-field"
                        id="contact-form--phone"
                        placeholder="Phone"
                        type="text"
                    ></input>
                    <div className="contact-form--label">
                        Email
                    </div>
                    <input
                        className="contact-form--input-field"
                        id="contact-form--email"
                        placeholder="Email"
                        type="text"
                    ></input>
                    <div className="contact-form--label">
                        Email Opt Out
                    </div>
                    <input
                        className="contact-form--input-field-checkbox"
                        id="contact-form--email-opt-out"
                        type="checkbox"
                    ></input>
                    <div className="contact-form--subheader">
                        Mailing Address
                    </div>
                    <div className="contact-form--label">
                        Street
                    </div>
                    <input
                        className="contact-form--input-field"
                        id="contact-form--street"
                        placeholder="Street"
                        type="text"
                    ></input>
                    <div className="contact-form--label">
                        City
                    </div>
                    <input
                        className="contact-form--input-field"
                        id="contact-form--city"
                        placeholder="City"
                        type="text"
                    ></input>
                    <div className="contact-form--label">
                        State/Province
                    </div>
                    <input
                        className="contact-form--input-field"
                        id="contact-form--state-province"
                        placeholder="State/Province"
                        type="text"
                    ></input>
                    <div className="contact-form--label">
                        Zip/Postal Code
                    </div>
                    <input
                        className="contact-form--input-field"
                        id="contact-form--zip-postal"
                        placeholder="Zip/Postal Code"
                        type="text"
                    ></input>
                    <div className="contact-form--label">
                        Country
                    </div>
                    <input
                        className="contact-form--input-field"
                        id="contact-form--country"
                        placeholder="Country"
                        type="text"
                    ></input>
                    <div className="contact-form--footer">
                        <div className="contact-form--footer--buttons">
                            <button type="submit" onClick={addContact}>
                                Add Contact
                            </button>
                            <button type="button">
                                Cancel
                            </button>
                        </div>
                    </div>
                </Form>
            </div>
        </section>
    )
}

export default ContactForm