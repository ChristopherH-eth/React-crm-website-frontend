import { ENDPOINTS, URLS } from "./config"

/**
 * @file contactUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the ContactForm component.
 */

const contactUrl = `${URLS}${ENDPOINTS.contacts}`

/**
 * @brief The addContactUtil() function adds a new contact to the database.
 */
function addContactUtil()
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
        .catch(console.error)
}

export { addContactUtil }