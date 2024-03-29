import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import Footer from "./Footer"
import { URLS, ENDPOINTS } from "../util/config"
import { getHeadingUtil } from "../util/collectionsUtil"
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
        setIsLoggedIn,                                                                  // State function for isLoggedIn variable
        setIsNew,                                                                       // State function for isNew variable
        setSelectedEntry                                                                // State function for selectedEntry
    } = props

    const {
        type,                                                                           // Data type to format for
        page                                                                            // Current page
    } = useParams()

    const [collectionData, setCollectionData] = React.useState([])                      // Current collection array
    const [isLoading, setIsLoading] = React.useState(true)                              // Flag if page is loading
    const [viewName, setViewName] = React.useState("/default")                          // Current table view name
    const [actionBarName, setActionBarName] = React.useState("/collection_default")     // Current action bar name
    const [view, setView] = React.useState([])                                          // Current table view
    const [actionBar, setActionBar] = React.useState([])                                // Current action bar

    // useNavigate hook to redirect browser
    const navigate = useNavigate()

    // Component functions stored in collectionsUtil
    const getHeading = () => getHeadingUtil(type, collectionData, actionBar, setIsNew)

    const typePage = `${type}Page`                                                      // Endpoint object key based on type
    const pageUrl = `${URLS.api}${ENDPOINTS[typePage]}/${page}`                         // Data Type Page API endpoint
    const viewUrl = `${URLS.api}${ENDPOINTS.tableView}/${[type]}${viewName}`            // Table View API endpoint
    const actionBarUrl = 
        `${URLS.api}${ENDPOINTS.actionBar}/${[type]}${actionBarName}`                   // Action Bar API endpoint

    // Request the table view
    React.useEffect(() => {
        fetch(viewUrl, {
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
                    setView(data.body.view_data)
            })
            .catch(console.error)
    }, [viewUrl, navigate, setIsLoggedIn])

    // Request the action bar
    React.useEffect(() => {
        fetch(actionBarUrl, {
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
                    setActionBar(data.body.action_bar_data)
            })
            .catch(console.error)
    }, [actionBarUrl, navigate, setIsLoggedIn])

    // Request collections data
    React.useEffect(() => {
        fetch(pageUrl, {
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
                    setCollectionData(data.body[type])
                    setIsLoading(false)
                }
            })
            .catch(console.error)
    }, [pageUrl, type, navigate, setIsLoggedIn])

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
            <div className="table-container">
                {getHeading()}
                <ResizableTable 
                    type={type}
                    columns={view}
                    dataEntries={collectionData}
                    setIsLoggedIn={setIsLoggedIn}
                    navigate={navigate}
                    pageUrl={pageUrl}
                    setCollectionData={setCollectionData}
                    setIsLoading={setIsLoading}
                    setIsNew={setIsNew}
                    setSelectedEntry={setSelectedEntry}
                />
            </div>
            <Footer />
        </section>
    )
}

export default Collections