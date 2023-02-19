import { Form } from "react-router-dom"

/**
 * @file ContactForm.js
 * @author 0xChristopher
 * @brief This file is responsible for the Contact Form component of the CRM website.
 */

const contactUrl = "http://localhost:8000/api/v1/contacts/add"

function addContact()
{
    const firstName = document.getElementById("contact-form--first-name").value
    const lastName = document.getElementById("contact-form--last-name").value

    const contactBody = {
        firstName: firstName,
        lastName: lastName
    }

    fetch(contactUrl, {
        method: "POST",
        mode: "cors",
        // credentials: "include",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(contactBody)
    })
        .then((res) => res.json().then((data) => ({status: res.status, body: data})))
        .then((res) => {
            console.log(res)
        })
}

function ContactForm()
{
    return (
        <section className="contact-form-container" id="contact-form-container">
            <div className="contact-form">
                <Form>
                    <div>
                        First Name
                    </div>
                    <input
                        id="contact-form--first-name"
                        placeholder="First Name" 
                        type="text"
                    ></input>
                    <div>Last Name</div>
                    <input
                        id="contact-form--last-name"
                        placeholder="Last Name"
                        type="text"
                    ></input>
                    <button type="submit" onClick={addContact}>
                        Add Contact
                    </button>
                    <button type="button">
                        Cancel
                    </button>
                </Form>
            </div>
        </section>
    )
}

export default ContactForm