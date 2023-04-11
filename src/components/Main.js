import React from "react"
import { Link } from "react-router-dom"
import { URLS, ENDPOINTS } from "../util/config"

/**
 * @file Main.js
 * @author 0xChristopher
 * @brief This file is responsible for the Main component of the CRM website.
 */

/**
 * @brief The Main() function builds the page main component.
 * @return Returns the main component to be added to the page
 */
function Main()
{
    const [leadsData, setLeadsData] = React.useState([])
    const [contactsData, setContactsData] = React.useState([])
    const [accountsData, setAccountsData] = React.useState([])

    const leadsUrl = `${URLS.api}${ENDPOINTS.leads}`                        // Leads API endpoint
    const contactsUrl = `${URLS.api}${ENDPOINTS.contacts}`                  // Contacts API endpoint
    const accountsUrl = `${URLS.api}${ENDPOINTS.accounts}`                  // Accounts API endpoint

    React.useEffect(() => {
        fetch(leadsUrl, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then((res) => res.json().then((data) => ({status: res.status, body: data})))
            .then((data) => {
                setLeadsData(data.body)
            })
            .catch(console.error)
    }, [leadsUrl])

    React.useEffect(() => {
        fetch(contactsUrl, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then((res) => res.json().then((data) => ({status: res.status, body: data})))
            .then((data) => {
                setContactsData(data.body)
            })
            .catch(console.error)
    }, [contactsUrl])

    React.useEffect(() => {
        fetch(accountsUrl, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then((res) => res.json().then((data) => ({status: res.status, body: data})))
            .then((data) => {
                setAccountsData(data.body)
            })
            .catch(console.error)
    }, [accountsUrl])

    // Map leads data
    const leads = leadsData.map((lead => {
        return (
            <table>
                <tr>
                    <td>
                        {lead.id}
                    </td>
                    <td>
                        {lead.first_name}
                    </td>
                </tr>
            </table>
        )
    }))

    // Map contacts data
    const contacts = contactsData.map((contact => {
        return (
            <table>
                <tr>
                    <td>
                        {contact.id}
                    </td>
                    <td>
                        {contact.first_name}
                    </td>
                </tr>
            </table>
        )
    }))

    // Map accounts data
    const accounts = accountsData.map((account => {
        return (
            <table>
                <tr>
                    <td>
                        {account.id}
                    </td>
                    <td>
                        {account.account_name}
                    </td>
                </tr>
            </table>
        )
    }))

    return (
        <main className="main">
            <div className="main--container">
                <div className="main--get-started">
                    Get Started
                </div>
                <div className="main--quick-look">
                    Quick Look
                </div>
                <div className="main--quick-look--container">
                    <div className="main--quick-look--item--container">
                        <Link className="main--quick-look--item" to={"leads/"}>
                            <div className="main--quick-look--item--bar" />
                            <div>
                                <div className="main--quick-look--item--header">
                                    Leads
                                </div>
                                <div className="main--quick-look--item--caption">
                                    Leads are your prospects before they become deals and customers.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="main--quick-look--item--container">
                        <Link className="main--quick-look--item" to={"contacts/"}>
                            <div className="main--quick-look--item--bar" />
                            <div>
                                <div className="main--quick-look--item--header">
                                    Contacts
                                </div>
                                <div className="main--quick-look--item--caption">
                                    Contacts are anyone you meet, sell to, or work with.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="main--quick-look--item--container">
                        <Link className="main--quick-look--item" to={"/"}>
                            <div className="main--quick-look--item--bar" />
                            <div>
                                <div className="main--quick-look--item--header">
                                    Opportunities
                                </div>
                                <div className="main--quick-look--item--caption">
                                    This is your pipeline. Track stages are your deals move forward.
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="main--quick-look--container">
                    <div className="main--quick-look--item--container">
                        <Link className="main--quick-look--item" to={"/"}>
                            <div className="main--quick-look--item--bar" />
                            <div>
                                <div className="main--quick-look--item--header">
                                    Test
                                </div>
                                <div className="main--quick-look--item--caption">
                                    Test
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="main--quick-look--item--container">
                        <Link className="main--quick-look--item" to={"/"}>
                            <div className="main--quick-look--item--bar" />
                            <div>
                                <div className="main--quick-look--item--header">
                                    Test
                                </div>
                                <div className="main--quick-look--item--caption">
                                    Test
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="main--quick-look--item--container">
                        <Link className="main--quick-look--item" to={"/"}>
                            <div className="main--quick-look--item--bar" />
                            <div>
                                <div className="main--quick-look--item--header">
                                    Test
                                </div>
                                <div className="main--quick-look--item--caption">
                                    Test
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="main--component--container">
                <div className="main--component">
                    <div className="main--component--header">
                        Leads
                    </div>
                    <div className="main--component--content">
                        {leads}
                    </div>
                </div>
                <div className="main--component">
                    <div className="main--component--header">
                        Opportunities
                    </div>
                    <div className="main--component--content">
                        Content
                    </div>
                </div>
                <div className="main--component">
                    <div className="main--component--header">
                        Contacts
                    </div>
                    <div className="main--component--content">
                        {contacts}
                    </div>
                </div>
            </div>
            <div className="main--component--container">
                <div className="main--component">
                    <div className="main--component--header">
                        Accounts
                    </div>
                    <div className="main--component--content">
                        {accounts}
                    </div>
                </div>
                <div className="main--component">
                    <div className="main--component--header">
                        Component
                    </div>
                    <div className="main--component--content">
                        Content
                    </div>
                </div>
                <div className="main--component">
                    <div className="main--component--header">
                        Component
                    </div>
                    <div className="main--component--content">
                        Content
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main