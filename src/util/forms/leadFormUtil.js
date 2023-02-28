import { ENDPOINTS, URLS } from "../config"

/**
 * @file leadFormUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the LeadForm component.
 */

// Leads API endpoint
const leadUrl = `${URLS}${ENDPOINTS.leads}`

/**
 * @brief The addLeadUtil() function adds a new lead to the database.
 */
function addLeadUtil()
{
    // Get form values
    const leadName = document.getElementById("lead-form--first-name").value
    const company = document.getElementById("lead-form--company").value

    // Build request body
    const leadBody = {
        leadName: leadName,
        company: company
    }

    // Send request to server
    fetch(leadUrl, {
        method: "POST",
        mode: "cors",
        // credentials: "include",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(leadBody)
    })
        .then((res) => res.json().then((data) => ({status: res.status, body: data})))
        .then((res) => {
            console.log(res)
        })
        .catch(console.error)
}

export { addLeadUtil }