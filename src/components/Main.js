import React from "react"
import { useNavigate } from "react-router-dom"
import Footer from "./Footer"
import { URLS, ENDPOINTS } from "../util/config"
import { mapLeads, mapContacts, mapAccounts } from "../util/mainUtil"
import QuickLook from "./containers/QuickLook"
import RecentEntries from "./containers/RecentEntries"
import Loading from "./Loading"

/**
 * @file Main.js
 * @author 0xChristopher
 * @brief This file is responsible for the Main component of the CRM website.
 * 
 * @dev Will need to implement a loading indicator for each component separately.
 */

/**
 * @brief The Main() function builds the page main component.
 * @return Returns the main component to be added to the page
 */
function Main(props)
{
    const {
        setIsLoggedIn                                                   // State function for isLoggedIn variable
    } = props

    const [leadsData, setLeadsData] = React.useState([])
    const [contactsData, setContactsData] = React.useState([])
    const [accountsData, setAccountsData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    // useNavigate hook to redirect browser
    const navigate = useNavigate()

    // Component functions stored in mainUtil
    const leads = () => mapLeads(leadsData)
    const contacts = () => mapContacts(contactsData)
    const accounts = () => mapAccounts(accountsData)

    const leadsUrl = `${URLS.api}${ENDPOINTS.leadsQuicklook}`           // Leads API endpoint
    const contactsUrl = `${URLS.api}${ENDPOINTS.contactsQuicklook}`     // Contacts API endpoint
    const accountsUrl = `${URLS.api}${ENDPOINTS.accountsQuicklook}`     // Accounts API endpoint

    // Get most recent leads
    React.useEffect(() => {
        fetch(leadsUrl, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then((res) => res.json().then((data) => ({status: res.status, body: data})))
            .then((data) => {
                if (data.status !== 200)
                {
                    setIsLoggedIn(false)
                    navigate("/login")
                }
                else
                {
                    setLeadsData(data.body)
                    setIsLoading(false)
                }
            })
            .catch(console.error)
    }, [leadsUrl, navigate, setIsLoggedIn])

    // Get most recent contacts
    React.useEffect(() => {
        fetch(contactsUrl, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then((res) => res.json().then((data) => ({status: res.status, body: data})))
            .then((data) => {
                if (data.status !== 200)
                {
                    setIsLoggedIn(false)
                    navigate("/login")
                }
                else
                {
                    setContactsData(data.body)
                    setIsLoading(false)
                }
            })
            .catch(console.error)
    }, [contactsUrl, navigate, setIsLoggedIn])

    // Get most recent accounts
    React.useEffect(() => {
        fetch(accountsUrl, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then((res) => res.json().then((data) => ({status: res.status, body: data})))
            .then((data) => {
                if (data.status !== 200)
                {
                    setIsLoggedIn(false)
                    navigate("/login")
                }
                else
                {
                    setAccountsData(data.body)
                    setIsLoading(false)
                }
            })
            .catch(console.error)
    }, [accountsUrl, navigate, setIsLoggedIn])

    // Don't render page content until server response received
    if (isLoading)
    {
        return (
            <Loading />
        )
    }

    return (
        <main className="main">
            <div className="main--container">
                <div className="main--get-started">
                    Get Started
                </div>
                <QuickLook />
            </div>
            <RecentEntries 
                leads={leads} 
                contacts={contacts}
                accounts={accounts}           
            />
            <Footer />
        </main>
    )
}

export default Main