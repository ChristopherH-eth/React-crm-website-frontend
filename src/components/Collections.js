import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import Footer from "./Footer"
import { URLS, ENDPOINTS } from "../util/config"
import { accountHeadingUtil, contactHeadingUtil, leadHeadingUtil } from "../util/collectionsUtil"
import Loading from "./Loading"
import ResizableTable from "./containers/ResizableTable"

/**
 * @file Collections.js
 * @author 0xChristopher
 * @brief This file is responsible for the Collections component of the CRM website.
 */

/**
 * @brief The Collections() function builds the page collections component.
 * @return Returns the collections component to be added to the page
 */
function Collections(props)
{
    const {
        setIsLoggedIn                                               // State function for isLoggedIn variable
    } = props

    const {
        type,                                                       // Data type to format for
        page                                                        // Current page
    } = useParams()

    // Table columns and widths for account entries
    const accountColumns = [
        {id: 0, col: "account_name", text: "Account Name", width: 200},
        {id: 1, col: "state_province", text: "State/Province", width: 200},
        {id: 2, col: "phone", text: "Phone", width: 200},
        {id: 3, col: "user.full_name", text: "Account Owner", width: 200}
    ]

    // Table columns and widths for contact entries
    const contactColumns = [
        {id: 0, col: "full_name", text: "Name", width: 150},
        {id: 1, col: "account.account_name", text: "Account Name", width: 150},
        {id: 2, col: "title", text: "Title", width: 150},
        {id: 3, col: "phone", text: "Phone", width: 150},
        {id: 4, col: "user.full_name", text: "Contact Owner", width: 150}
    ]

    // Table columns and widths for lead entries
    const leadColumns = [
        {id: 0, col: "full_name", text: "Name", width: 150},
        {id: 1, col: "company", text: "Company", width: 150},
        {id: 2, col: "state_province", text: "State/Province", width: 150},
        {id: 3, col: "phone", text: "Phone", width: 150},
        {id: 4, col: "email", text: "Email", width: 150},
        {id: 5, col: "lead_status", text: "Lead Status", width: 150},
        {id: 6, col: "user.full_name", text: "Lead Owner", width: 150}
    ]

    // Table columns and widths for opportunity entries
    const oppColumns = [
        {id: 0, col: "opportunity_name", text: "Opportunity", width: 200}
    ]

    const [accountData, setAccountData] = React.useState([])        // Current collections array
    const [isLoading, setIsLoading] = React.useState(true)          // Flag if page is loading

    // useNavigate hook to redirect browser
    const navigate = useNavigate()

    const typePage = `${type}Page`                                  // Endpoint object key based on type
    const accountUrl = `${URLS.api}${ENDPOINTS[typePage]}${page}`   // API endpoint

    // Options array for account entry dropdown button
    const options = [
        {value: "edit", label: "Edit"},
        {value: "delete", label: "Delete"},
        {value: "change_owner", label: "Change Owner"}
    ]

    // Callback function to get the correct table heading based on data type
    const getHeading = () => {
        if (type === "accounts")
            return accountHeadingUtil()
        else if (type === "contacts")
            return contactHeadingUtil()
        else if (type === "leads")
            return leadHeadingUtil()
    }

    // Callback function to get the correct column set based on data type
    const getColumns = () => {
        if (type === "accounts")
            return accountColumns
        else if (type === "contacts")
            return contactColumns
        else if (type === "leads")
            return leadColumns
    }

    // Request collections data
    React.useEffect(() => {
        fetch(accountUrl, {
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
                    setAccountData(data.body[type])
                    setIsLoading(false)
                }
            })
            .catch(console.error)
    }, [accountUrl, type, navigate, setIsLoggedIn])

    // Don't render page content until server response received
    if (isLoading)
    {
        return (
            <Loading />
        )
    }

    // Otherwise render page data
    return (
        <section className="collections">
            <div className="table-data--container">
                {getHeading()}
                <ResizableTable 
                    type={type}
                    columns={getColumns()}
                    dataEntries={accountData}
                    options={options}
                />
            </div>
            <Footer />
        </section>
    )
}

export default Collections