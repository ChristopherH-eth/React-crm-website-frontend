import { ENDPOINTS, URLS } from "../config"
import { clearCurrentFields } from "../util"

/**
 * @file accountFormUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the AccountForm component.
 */

/**
 * @brief The addAccountUtil() function adds a new account to the database.
 */
function addAccountUtil()
{
    const accountUrl = `${URLS.api}${ENDPOINTS.accounts}`               // Accounts API endpoint
    const accountFormInputClass = "account-form--input"                 // Form input fields class

    // Get form values
    const accountName = document.getElementById("account-form--account-name").value
    const website = document.getElementById("account-form--website").value

    // Build request body
    const accountBody = {
        account_name: accountName,                                      // Account name
        website: website                                                // Account website
    }

    // Send request to server
    fetch(accountUrl, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(accountBody)
    })
        .then((res) => res.json().then((data) => ({status: res.status, body: data})))
        .then((data) => {
            console.log(data)

            // Clear input fields on success
            if (data.status === 201)
                clearCurrentFields(accountFormInputClass)
        })
        .catch(console.error)
}

export { addAccountUtil }