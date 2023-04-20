import { ENDPOINTS, URLS } from "../config"
import { clearCurrentFields } from "../util"

/**
 * @file contactUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the ContactForm component.
 */

/**
 * @brief The addContactUtil() function adds a new contact to the database.
 */
function addContactUtil(accountName)
{
    const contactUrl = `${URLS}${ENDPOINTS.contacts}`                   // Contacts API endpoint
    const contactFormInputClass = "contact-form--input"                 // Form input fields class

    // Get form values
    const firstName = document.getElementById("contact-form--first-name").value
    const lastName = document.getElementById("contact-form--last-name").value

    // Build request body
    const contactBody = {
        first_name: firstName,
        last_name: lastName,
        account_name: accountName
    }

    // Send request to server
    fetch(contactUrl, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(contactBody)
    })
        .then((res) => res.json().then((data) => ({status: res.status, body: data})))
        .then((data) => {
            console.log(data)

            // Clear input fields on success
            if (data.status === 201)
                clearCurrentFields(contactFormInputClass)
        })
        .catch(console.error)
}

export { addContactUtil }