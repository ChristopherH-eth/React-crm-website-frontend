/**
 * @file contactsUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the Contact component.
 */

/**
 * @brief The showContactFormUtil() function shows the new contact form.
 */
function showContactFormUtil()
{
    document.body.classList.add("lock-scroll")
    document.getElementById("contact-form-container").classList.add("show")
    document.getElementById("page-mask").classList.add("show")
}

export { showContactFormUtil }