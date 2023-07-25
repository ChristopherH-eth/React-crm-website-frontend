import { ENDPOINTS, URLS } from "../config"
import { clearCurrentFields } from "../util"

/**
 * @file accountFormUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the AccountForm component.
 */

/**
 * @brief The addAccountUtil() function adds a new account to the database.
 * @param accountFormInputClass Class value of the account form
 */
function addAccountUtil(accountFormInputClass)
{
    // Accounts API endpoint
    const accountUrl = `${URLS.api}${ENDPOINTS.accounts}`

    // Get form values
    const accountName = document.getElementById("account-form--account-name").value
    const website = document.getElementById("account-form--website").value
    const userId = 1

    // Build request body
    const accountBody = {
        account_name: accountName,                                      // Account name
        website: website,                                               // Account website
        user_id: userId                                                 // Account owner
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