import ContactForm from "./ContactForm"
import AccountForm from "./AccountForm"

/**
 * @file Forms.js
 * @author 0xChristopher
 * @brief This file is responsible for the handling the forms components of the CRM website.
 */

/**
 * @brief The Forms() function builds the page forms component.
 * @return Returns the forms component to be added to the page
 */
function Forms()
{
    return (
        <div className="forms-container">
            <ContactForm />
            <AccountForm />
        </div>
    )
}

export default Forms