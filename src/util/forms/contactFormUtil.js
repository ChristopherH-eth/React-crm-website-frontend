import { ENDPOINTS, URLS } from "../config"
import { clearCurrentFields } from "../util"

/**
 * @file contactUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the ContactForm component.
 */

/**
 * @brief The addContactUtil() function adds a new contact to the database.
 * @param accountName Account object logical name
 * @param accountFormInputClass Class value of the account form
 */
function addContactUtil(accountName, contactFormInputClass)
{
    // Contacts API endpoint
    const contactUrl = `${URLS.api}${ENDPOINTS.contacts}`

    // Get form values
    const firstName = document.getElementById("contact-form--first-name").value
    const lastName = document.getElementById("contact-form--last-name").value
    const emailOption = document.getElementById("contact-form--email-opt-out").value
    const userId = 1

    // Build request body
    const contactBody = {
        first_name: firstName,                                          // First Name
        last_name: lastName,                                            // Last Name
        full_name: firstName + " " + lastName,                          // Full Name
        account_name: accountName,                                      // Name of Contact Account
        email_opt_out: emailOption,                                     // Email Opt Out
        user_id: userId                                                 // Contact Creator
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