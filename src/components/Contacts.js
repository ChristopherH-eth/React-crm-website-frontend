/**
 * @file Contacts.js
 * @author 0xChristopher
 * @brief This file is responsible for the Contacts component of the CRM website.
 */

function showContactForm()
{
    document.body.classList.add("lock-scroll")
    document.getElementById("contact-form-container").classList.add("show")
    document.getElementById("page-mask").classList.add("show")
}

function Contacts()
{
    return (
        <section className="contacts">
            <div>
                Contacts
            </div>
            <div>
                <button onClick={showContactForm}>New</button>
            </div>
        </section>
    )
}

export default Contacts