import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Footer from "./Footer"
import DropdownButton from "./elements/DropdownButton"
import { URLS, ENDPOINTS } from "../util/config"
import { showContactFormUtil } from "../util/contactsUtil"
import Loading from "./Loading"

/**
 * @file Contacts.js
 * @author 0xChristopher
 * @brief This file is responsible for the Contacts component of the CRM website.
 */

/**
 * @brief The Contacts() function builds the page contacts component.
 * @return Returns the contacts component to be added to the page
 */
function Contacts(props)
{
    const {
        setIsLoggedIn                                               // State function for isLoggedIn variable
    } = props

    const [contactData, setContactData] = React.useState([])        // Current contacts array
    const [isLoading, setIsLoading] = React.useState(true)          // Flag if page is loading

    // useNavigate hook to redirect browser
    const navigate = useNavigate()

    // Contacts API endpoint
    const contactUrl = `${URLS.api}${ENDPOINTS.contacts}`

    // Options array for account entry dropdown button
    const options = [
        {value: "edit", label: "Edit"},
        {value: "delete", label: "Delete"},
        {value: "change_owner", label: "Change Owner"}
    ]

    // Component functions stored in contactsUtil
    const showContactForm = () => showContactFormUtil()

    // Request contacts data
    React.useEffect(() => {
        fetch(contactUrl, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then((res) => res.json().then((data) => ({status: res.status, body: data})))
            .then((data) => {
                if (data.status === 401)
                {
                    setIsLoggedIn(false)
                    navigate("/login")
                }
                else
                {
                    setContactData(data.body)
                    console.log(contactData)
                    setIsLoading(false)
                }
            })
            .catch(console.error)
    }, [contactUrl, navigate, setIsLoggedIn])

    // Map contact data
    const contacts = contactData.map((contact) => {
        // Contact entry url
        const contactEntryUrl = `${URLS.base}${ENDPOINTS.contacts}${contact.id}`

        return (
            <tr className="table-data--items" key={contact.id}>
                <td className="table-data--borderless--centered table-data--5p">
                    <span className="table-data--content">
                        <Link className="link" to={contactEntryUrl}>{contact.id}</Link>
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
                        {contact.account.account_name}
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
                        {contact.user.first_name} {contact.user.last_name}
                    </span>
                </td>
                <td className="table-data--borderless--centered table-data--5p">
                    <DropdownButton 
                        placeholder={""} 
                        options={options} 
                    />
                </td>
            </tr>
        )
    })

    // Don't render page content until server response received
    if (isLoading)
    {
        return (
            <Loading />
        )
    }

    // Otherwise render page data
    return (
        <section className="contacts">
            <div className="table-data--container">
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
            </div>
            <Footer />
        </section>
    )
}

export default Contacts