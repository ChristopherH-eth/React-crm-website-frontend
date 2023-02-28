/**
 * @file leadsUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the Leads component.
 */

/**
 * @brief The showLeadFormUtil() function shows the new lead form.
 */
function showLeadFormUtil()
{
    document.body.classList.add("lock-scroll")
    document.getElementById("lead-form--container").classList.add("show")
    document.getElementById("page-mask").classList.add("show")
}

export { showLeadFormUtil }