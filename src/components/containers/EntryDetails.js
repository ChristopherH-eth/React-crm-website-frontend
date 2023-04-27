import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { URLS, ENDPOINTS } from "../../util/config"
import { contactDetails } from "../../util/containers/contactEntryUtil"
import { accountDetails } from "../../util/containers/accountEntryUtil"
import { leadDetails } from "../../util/containers/leadEntryUtil"
import Footer from "../Footer"

/**
 * @file EntryDetails.js
 * @author 0xChristopher
 * @brief This file is responsible for identifying which entry is being requested by the user, and pulling
 *      the relevant view from the corresponding utility file.
 */

function EntryDetails()
{
    const {
        type,
        id
    } = useParams()

    const [dataEntry, setDataEntry] = React.useState({})

    const navigate = useNavigate()

    const url = `${URLS.api}${ENDPOINTS[type]}${id}`                // API Endpoint
    const fetchType = type.slice(0, -1)                             // Slice type to make singular

    // Component functions stored in util files
    const showContactDetails = () => contactDetails(dataEntry)
    const showAccountDetails = () => accountDetails(dataEntry)
    const showLeadDetails = () => leadDetails(dataEntry)

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
                    navigate("/login")
                else
                    setDataEntry(data.body[fetchType])
            })
            .catch(console.error)
    }, [url, navigate, fetchType])

    return (
        <section className="entry-details">
            {fetchType === "contact" && showContactDetails()}
            {fetchType === "account" && showAccountDetails()}
            {fetchType === "lead" && showLeadDetails()}
            <Footer />
        </section>
    )
}

export default EntryDetails