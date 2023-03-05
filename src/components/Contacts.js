import React from "react"
import { URLS, ENDPOINTS } from "../util/config"
import { authHeader } from "../util/loginUtil"
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
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Bearer ${authHeader}`
            }
        })
            .then((res) => res.json())
            .then((data) => setContactData(data))
            .catch(console.error)
    }, [contactUrl])

    // Map contact data
    const contacts = contactData.map((contact) => {
        return (
            <tr className="table-data--items" key={contact.id}>
                <td className="table-data--borderless--centered table-data--5p">
                    <span className="table-data--content">
                        {contact.id}
                    </span>
                </td>
                <td className="table-data--borderless--centered table-data--2_5p">
                    <input
                        className="table-data--input"
                        id="contacts--contact-selector"
                        type="checkbox"
                    ></input>
                </td>
                <td className="table-data--borderless table-data--19_5p">
                    <span className="table-data--content">
                        {contact.first_name} {contact.last_name}
                    </span>
                </td>
                <td className="table-data--borderless table-data--17p">
                    <span className="table-data--content">
                        {contact.account_id}
                    </span>
                </td>
                <td className="table-data--borderless table-data--17p">
                    <span className="table-data--content">
                        {contact.title}
                    </span>
                </td>
                <td className="table-data--borderless table-data--17p">
                    <span className="table-data--content">
                        {contact.phone}
                    </span>
                </td>
                <td className="table-data--borderless table-data--17p">
                    <span className="table-data--content">
                        {contact.contact_owner}
                    </span>
                </td>
                <td className="table-data--borderless--centered table-data--5p">
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
                            <td className="table-data--end table-data--5p" />
                            <td className="table-data--end table-data--2_5p" />
                            <td className="table-data table-data--19_5p">
                                <span className="table-data--content">
                                    Name
                                </span>  
                            </td>
                            <td className="table-data table-data--17p">
                                <span className="table-data--content">
                                    Account Name
                                </span>
                            </td>
                            <td className="table-data table-data--17p">
                                <span className="table-data--content">
                                    Title
                                </span>
                            </td>
                            <td className="table-data table-data--17p">
                                <span className="table-data--content">
                                    Phone
                                </span>
                            </td>
                            <td className="table-data table-data--17p">
                                <span className="table-data--content">
                                    Contact Owner
                                </span>
                            </td>
                            <td className="table-data--end table-data--5p" />
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