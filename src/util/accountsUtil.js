/**
 * @file accountsUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the Accounts component.
 */

/**
 * @brief The showAccountFormUtil() function shows the new account form.
 */
function showAccountFormUtil()
{
    document.body.classList.add("lock-scroll")
    document.getElementById("account-form--container").classList.add("show")
    document.getElementById("page-mask").classList.add("show")
}

export { showAccountFormUtil }