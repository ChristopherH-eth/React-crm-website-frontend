import { ENDPOINTS, URLS } from "../config"
import { destroyFormUtil } from "../util"

/**
 * @file collectionsFormUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the CollectionsForm component.
 */

// TODO: To make this function dynamic, need to iterate over form fields and create JSON body based on logical names for table usage.

/**
 * @brief The addEntryUtil() function adds a new entry to the database.
 * @param collectionsFormInputClass Class value of the collections form
 * @param type Data type for form
 */
function addEntryUtil(collectionsFormInputClass, type, formRef)
{
    // Entry API endpoint
    const entryUrl = `${URLS.api}${ENDPOINTS[type]}`

    // Get form values
    const firstName = document.getElementById(`${type}-form--first-name`).value
    const lastName = document.getElementById(`${type}-form--last-name`).value
    const company = document.getElementById(`${type}-form--company`).value
    const website = document.getElementById(`${type}-form--website`).value
    const status = document.getElementById(`${type}-form--status`).value
    const emailOption = (document.getElementById(`${type}-form--email-opt-out`).checked ? true : false)
    const userId = 1

    // Build request body
    const entryBody = {
        first_name: firstName,                                          // First Name
        last_name: lastName,                                            // Last Name
        full_name: firstName + " " + lastName,                          // Full Name
        company: company,                                               // Company Name
        website: website,                                               // Website
        lead_status: status,                                            // Lead Satus
        email_opt_out: emailOption,                                     // Email Opt Out
        user_id: userId                                                 // Lead Creator
    }

    console.log(entryBody)

    // Send request to server
    fetch(entryUrl, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(entryBody)
    })
        .then((res) => res.json().then((data) => ({status: res.status, body: data})))
        .then((data) => {
            console.log(data)

            // Clear input fields on success
            if (data.status === 201)
                destroyFormUtil(collectionsFormInputClass, formRef)
        })
        .catch(console.error)
}

export { addEntryUtil }