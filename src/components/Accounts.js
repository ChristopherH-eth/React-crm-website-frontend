import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import Footer from "./Footer"
import { URLS, ENDPOINTS } from "../util/config"
import { showAccountFormUtil } from "../util/accountsUtil"
import Loading from "./Loading"
import ResizableTable from "./containers/ResizableTable"

/**
 * @file Accounts.js
 * @author 0xChristopher
 * @brief This file is responsible for the Accounts component of the CRM website.
 */

/**
 * @brief The Accounts() function builds the page accounts component.
 * @return Returns the accounts component to be added to the page
 */
function Accounts(props)
{
    const {
        setIsLoggedIn                                               // State function for isLoggedIn variable
    } = props

    const {
        type,                                                       // Data type to format for
        page                                                        // Current page
    } = useParams()

    // Table columns and widths
    const columns = [
        {id: 0, col: "account_name", text: "Account Name", width: 200},
        {id: 1, col: "title", text: "Title", width: 200},
        {id: 2, col: "phone", text: "Phone", width: 200},
        {id: 3, col: "user.full_name", text: "Account Owner", width: 200}
    ]

    const [accountData, setAccountData] = React.useState([])        // Current accounts array
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

    // Component functions stored in accountsUtil
    const showAccountForm = () => showAccountFormUtil()

    // Request accounts data
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
        <section className="accounts">
            <div className="table-data--container">
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
                <ResizableTable 
                    type={type}
                    columns={columns}
                    dataEntries={accountData}
                    options={options}
                />
            </div>
            <Footer />
        </section>
    )
}

export default Accounts