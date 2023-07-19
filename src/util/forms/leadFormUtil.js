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
    const leadName = document.getElementById("lead-form--first-name").value
    const company = document.getElementById("lead-form--company").value

    // Build request body
    const leadBody = {
        first_name: leadName,                                           // Lead first name
        company: company                                                // Lead company name
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