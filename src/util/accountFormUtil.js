import { ENDPOINTS, URLS } from "./config"

/**
 * @file accountFormUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the AccountForm component.
 */

// Accounts API endpoint
const accountUrl = `${URLS}${ENDPOINTS.accounts}`

/**
 * @brief The addAccountUtil() function adds a new account to the database.
 */
function addAccountUtil()
{
    // Get form values
    const accountName = document.getElementById("account-form--first-name").value
    const website = document.getElementById("account-form--website").value

    // Build request body
    const accountBody = {
        accountName: accountName,
        website: website
    }

    // Send request to server
    fetch(accountUrl, {
        method: "POST",
        mode: "cors",
        // credentials: "include",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(accountBody)
    })
        .then((res) => res.json().then((data) => ({status: res.status, body: data})))
        .then((res) => {
            console.log(res)
        })
        .catch(console.error)
}

export { addAccountUtil }