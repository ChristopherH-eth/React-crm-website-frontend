/**
 * @file collectionsUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the Collections component.
 */

/**
 * @brief The showAccountForm() function shows the new account form.
 */
function showAccountForm()
{
    document.body.classList.add("lock-scroll")
    document.getElementById("account-form--container").classList.add("show")
    document.getElementById("page-mask").classList.add("show")
}

/**
 * @brief The showContactForm() function shows the new contact form.
 */
function showContactForm()
{
    document.body.classList.add("lock-scroll")
    document.getElementById("contact-form--container").classList.add("show")
    document.getElementById("page-mask").classList.add("show")
}

/**
 * @brief The showLeadForm() function shows the new lead form.
 */
function showLeadForm()
{
    document.body.classList.add("lock-scroll")
    document.getElementById("lead-form--container").classList.add("show")
    document.getElementById("page-mask").classList.add("show")
}

/**
 * @brief The accountHeadingUtil() function sets the JSX for the Accounts table heading.
 * @returns Returns the Accounts table heading
 */
function accountHeadingUtil()
{
    return (
        <div className="table-data--heading">
            <img 
                className="table-data--heading-icon" 
                src="images/icons/accounticon.png"
                alt="accounts" 
            />
            <span className="table-data--heading-text">Accounts</span>
            <div className="table-data--buttons">
                <button onClick={showAccountForm}>New</button>
            </div>
        </div>
    )
}

/**
 * @brief The contactHeadingUtil() function sets the JSX for the Contacts table heading.
 * @returns Returns the Contacts table heading
 */
function contactHeadingUtil()
{
    return (
        <div className="table-data--heading">
            <img 
                className="table-data--heading-icon" 
                src="images/icons/contacticon.png"
                alt="contacts" 
            />
            <span className="table-data--heading-text">Contacts</span>
            <div className="table-data--buttons">
                <button onClick={showContactForm}>New</button>
            </div>
        </div>
    )
}

/**
 * @brief The leadHeadingUtil() function sets the JSX for the Leads table heading.
 * @returns Returns Leads table heading
 */
function leadHeadingUtil()
{
    return (
        <div className="table-data--heading">
            <img 
                className="table-data--heading-icon" 
                src="images/icons/leadicon.png"
                alt="leads" 
            />
            <span className="table-data--heading-text">Leads</span>
            <div className="table-data--buttons">
                <button onClick={showLeadForm}>New</button>
            </div>
        </div>
    )
}

export { accountHeadingUtil, contactHeadingUtil, leadHeadingUtil }