import React from "react"
import { URLS, ENDPOINTS } from "../util/config"
import { showContactFormUtil } from "../util/contactsUtil"

/**
 * @file Contacts.js
 * @author 0xChristopher
 * @brief This file is responsible for the Contacts component of the CRM website.
 */

/**
 * @brief The Contacts() function builds the page contacts component.
 * @return Returns the contacts component to be added to the page
 */
function Contacts()
{
    const [contactData, setContactData] = React.useState([])

    // Contacts API endpoint
    const contactUrl = `${URLS.api}${ENDPOINTS.contacts}`

    // Component functions stored in contactsUtil
    const showContactForm = () => showContactFormUtil()

    React.useEffect(() => {
        fetch(contactUrl, {
            method: "GET",
            mode: "cors",
            // credentials: "include",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then((res) => res.json())
            .then((data) => setContactData(data))
            .catch(console.error)
    }, [contactUrl])

    // Map contact data
    const contacts = contactData.map((contact) => {
        return (
            <div className="contacts--items" key={contact.id}>
                <div className="contacts--id--borderless">
                    {contact.id}
                </div>
                <div className="contacts--name--borderless">
                    {contact.firstName} {contact.lastName}
                </div>
                <div className="contacts--account-name--borderless">
                    
                </div>
                <div className="contacts--title--borderless">
                    
                </div>
                <div className="contacts--phone--borderless">
                    
                </div>
                <div className="contacts--contact-owner--borderless">
                    
                </div>
            </div>
        )
    })

    return (
        <section className="contacts">
            <div className="contacts--container">
                <div className="contacts--heading">
                    Contacts
                </div>
                <div className="contacts--headers">
                    <div className="contacts--name">
                        Name    
                    </div>
                    <div className="contacts--account-name">
                        Account Name
                    </div>
                    <div className="contacts--title">
                        Title
                    </div>
                    <div className="contacts--phone">
                        Phone
                    </div>
                    <div className="contacts--contact-owner">
                        Contact Owner
                    </div>
                </div>
                {contacts}
                <div className="contacts--buttons">
                    <button onClick={showContactForm}>New</button>
                </div>
            </div>
        </section>
    )
}

export default Contacts