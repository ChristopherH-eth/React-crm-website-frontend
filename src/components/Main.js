import React from "react"
import { Link } from "react-router-dom"
import Footer from "./Footer"
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

    const leadsUrl = `${URLS.api}${ENDPOINTS.leadsQuicklook}`                   // Leads API endpoint
    const contactsUrl = `${URLS.api}${ENDPOINTS.contactsQuicklook}`             // Contacts API endpoint
    const accountsUrl = `${URLS.api}${ENDPOINTS.accountsQuicklook}`             // Accounts API endpoint

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
            <tr className="table-data--items" key={lead.id}>
                <td className="table-data--borderless table-data--10p">
                    <span className="table-data--content">
                        <Link className="link" to={`leads/${lead.id}`}>{lead.id}</Link>
                    </span>
                </td>
                <td className="table-data--borderless table-data--fill">
                    <span className="table-data--content">
                        {lead.first_name}
                    </span>
                </td>
            </tr>
        )
    }))

    // Map contacts data
    const contacts = contactsData.map((contact => {
        return (
            <tr className="table-data--items" key={contact.id}>
                <td className="table-data--borderless table-data--10p">
                    <span className="table-data--content">
                        <Link className="link" to={`contacts/${contact.id}`}>{contact.id}</Link>
                    </span>
                </td>
                <td className="table-data--borderless table-data--fill">
                    <span className="table-data--content">
                        {contact.first_name}
                    </span>
                </td>
            </tr>
        )
    }))

    // Map accounts data
    const accounts = accountsData.map((account => {
        return (
            <tr className="table-data--items" key={account.id}>
                <td className="table-data--borderless table-data--10p">
                    <span className="table-data--content">
                        <Link className="link" to={`accounts/${account.id}`}>{account.id}</Link>
                    </span>
                </td>
                <td className="table-data--borderless table-data--fill">
                    <span className="table-data--content">
                        {account.account_name}
                    </span>
                </td>
            </tr>
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
                            <div className="main--quick-look--icon--container">
                                <img 
                                    className="quick-look--icon" 
                                    src="images/icons/leadicon.png" 
                                    alt="quick look leads icon"
                                />
                            </div>
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
                            <div className="main--quick-look--icon--container">
                                <img 
                                    className="quick-look--icon" 
                                    src="images/icons/contacticon.png" 
                                    alt="quick look leads icon"
                                />
                            </div>
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
                            <div className="main--quick-look--icon--container">
                                <img 
                                    className="quick-look--icon" 
                                    src="images/icons/opportunityicon.png" 
                                    alt="quick look leads icon"
                                />
                            </div>
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
                                    Test------------------------------------
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
                                    Test------------------------------------
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
                                    Test------------------------------------
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="main--component--container">
                <div className="main--component">
                    <div className="main--component--header">
                        <img 
                            className="quick-look--component--icon" 
                            src="images/icons/leadicon.png" 
                            alt="recent leads icon"
                        />
                        Recent Leads
                    </div>
                    <div className="main--component--content">
                        <table className="table-data--table">
                            <tbody>
                                {leads}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="main--component">
                    <div className="main--component--header">
                        <img 
                            className="quick-look--component--icon" 
                            src="images/icons/opportunityicon.png" 
                            alt="recent leads icon"
                        />
                        Recent Opportunities
                    </div>
                    <div className="main--component--content">
                        Content
                    </div>
                </div>
                <div className="main--component">
                    <div className="main--component--header">
                        <img 
                            className="quick-look--component--icon" 
                            src="images/icons/contacticon.png" 
                            alt="recent leads icon"
                        />
                        Recent Contacts
                    </div>
                    <div className="main--component--content">
                        <table className="table-data--table">
                            <tbody>
                                {contacts}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="main--component--container">
                <div className="main--component">
                    <div className="main--component--header">
                        Recent Accounts
                    </div>
                    <div className="main--component--content">
                        <table className="table-data--table">
                            <tbody>
                                {accounts}
                            </tbody>
                        </table>
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
            <Footer />
        </main>
    )
}

export default Main