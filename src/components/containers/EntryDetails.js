import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { URLS, ENDPOINTS } from "../../util/config"
import { contactDetails } from "../../util/containers/contactEntryUtil"
import { accountDetails } from "../../util/containers/accountEntryUtil"
import { leadDetails } from "../../util/containers/leadEntryUtil"
import { opportunityDetails } from "../../util/containers/opportunityEntryUtil"
import Loading from "../Loading"
import Footer from "../Footer"

/**
 * @file EntryDetails.js
 * @author 0xChristopher
 * @brief This file is responsible for identifying which entry is being requested by the user, and pulling
 *      the relevant view from the corresponding utility file.
 */

/**
 * @brief The EntryDetails() function builds the page entry details component.
 * @return Returns the entry details component to be added to the page
 */
function EntryDetails(props)
{
    const {
        setIsLoggedIn                                               // State function for isLoggedIn variable
    } = props

    const {
        type,                                                       // Data type to format for
        id                                                          // Entry id
    } = useParams()

    const [dataEntry, setDataEntry] = React.useState({})            // The current data entry
    const [isLoading, setIsLoading] = React.useState(true)          // Flag if page is loading

    // useNavigate hook to redirect browser
    const navigate = useNavigate()

    const url = `${URLS.api}${ENDPOINTS[type]}${id}`                // API Endpoint

    // Component functions stored in util files
    const showContactDetails = () => contactDetails(dataEntry)
    const showAccountDetails = () => accountDetails(dataEntry)
    const showLeadDetails = () => leadDetails(dataEntry)
    const showOpportunityDetails = () => opportunityDetails(dataEntry)

    // Get database entry details
    React.useEffect(() => {
        fetch(url, {
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
                    setDataEntry(data.body)
                    setIsLoading(false)
                }
            })
            .catch(console.error)
    }, [url, navigate, setIsLoggedIn])

    // Don't render page content until server response received
    if (isLoading)
    {
        return (
            <Loading />
        )
    }

    return (
        <section className="entry-details">
            {/* Display JSX based on parameterized type */}
            {type === "contacts" && showContactDetails()}
            {type === "accounts" && showAccountDetails()}
            {type === "leads" && showLeadDetails()}
            {type === "opportunities" && showOpportunityDetails()}
            <Footer />
        </section>
    )
}

export default EntryDetails