import { ENDPOINTS, URLS } from "../config"
import { clearCurrentFields } from "../util"

/**
 * @file leadFormUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the LeadForm component.
 */

/**
 * @brief The addLeadUtil() function adds a new lead to the database.
 */
function addLeadUtil()
{
    const leadUrl = `${URLS.api}${ENDPOINTS.leads}`                     // Leads API endpoint
    const leadFormInputClass = "lead-form--input"                       // Form input fields class

    // Get form values
    const firstName = document.getElementById("lead-form--first-name").value
    const lastName = document.getElementById("lead-form--last-name").value
    const company = document.getElementById("lead-form--company").value
    const status = document.getElementById("lead-form--status").value
    const emailOption = document.getElementById("lead-form--email-opt-out").value
    const userId = 1

    // Build request body
    const leadBody = {
        first_name: firstName,                                          // First Name
        last_name: lastName,                                            // Last Name
        full_name: firstName + " " + lastName,                          // Full Name
        company: company,                                               // Company Name
        lead_status: status,                                            // Lead Satus
        email_opt_out: emailOption,                                     // Email Opt Out
        user_id: userId                                                 // Lead Creator
    }

    // Send request to server
    fetch(leadUrl, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(leadBody)
    })
        .then((res) => res.json().then((data) => ({status: res.status, body: data})))
        .then((data) => {
            console.log(data)

            // Clear input fields on success
            if (data.status === 201)
                clearCurrentFields(leadFormInputClass)
        })
        .catch(console.error)
}

export { addLeadUtil }