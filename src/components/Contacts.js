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
            <tr className="table-data--items" key={contact.id}>
                <td className="table-data--5p--borderless">
                    {contact.id}
                </td>
                <td className="table-data--2_5p--borderless">
                    <input
                        className="table-data--2_5p--borderless--input"
                        id="contacts--contact-selector"
                        type="checkbox"
                    ></input>
                </td>
                <td className="table-data--19_5p--borderless">
                    {contact.first_name} {contact.last_name}
                </td>
                <td className="table-data--17p--borderless">
                    {contact.account_id}
                </td>
                <td className="table-data--17p--borderless">
                    {contact.title}
                </td>
                <td className="table-data--17p--borderless">
                    {contact.phone}
                </td>
                <td className="table-data--17p--borderless">
                    {contact.contact_owner}
                </td>
                <td className="table-data--5p--borderless">
                    <button>...</button>
                </td>
            </tr>
        )
    })

    return (
        <section className="contacts">
            <div className="table-data--container">
                <div className="table-data--heading">
                    Contacts
                </div>
                <table className="table-data--table">
                    <tbody>
                        <tr className="table-data--headers">
                            <td className="table-data--5p" />
                            <td className="table-data--2_5p" />
                            <td className="table-data--19_5p">
                                Name    
                            </td>
                            <td className="table-data--17p">
                                Account Name
                            </td>
                            <td className="table-data--17p">
                                Title
                            </td>
                            <td className="table-data--17p">
                                Phone
                            </td>
                            <td className="table-data--17p">
                                Contact Owner
                            </td>
                            <td className="table-data--5p-end" />
                        </tr>
                        {contacts}
                    </tbody>
                </table>
                <div className="table-data--buttons">
                    <button onClick={showContactForm}>New</button>
                </div>
            </div>
        </section>
    )
}

export default Contacts