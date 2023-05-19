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
        setIsLoggedIn                                               // State function for isLoggedIn variable
    } = props

    const {
        type,                                                       // Data type to format for
        page                                                        // Current page
    } = useParams()

    const [collectionData, setCollectionData] = React.useState([])          // Current collections array
    const [isLoading, setIsLoading] = React.useState(true)                  // Flag if page is loading
    const [viewName, setViewName] = React.useState("/default")              // Current table view name
    const [view, setView] = React.useState([])                              // Current table view

    // useNavigate hook to redirect browser
    const navigate = useNavigate()

    const typePage = `${type}Page`                                          // Endpoint object key based on type
    const url = `${URLS.api}${ENDPOINTS[typePage]}${page}`                  // API endpoint
    const viewUrl = `${URLS.api}${ENDPOINTS.tableView}${[type]}${viewName}` // Table View API endpoint

    // Options array for account entry dropdown button
    const options = [
        {value: "edit", label: "Edit"},
        {value: "delete", label: "Delete"},
        {value: "change_owner", label: "Change Owner"}
    ]

    // Callback function to get the correct table heading based on data type
    const getHeading = () => getHeadingUtil(type, collectionData)

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

    // Request collections data
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
                    setCollectionData(data.body[type])
                    setIsLoading(false)
                }
            })
            .catch(console.error)
    }, [url, type, navigate, setIsLoggedIn])

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
                    columns={view}
                    dataEntries={collectionData}
                    options={options}
                />
            </div>
            <Footer />
        </section>
    )
}

export default Collections