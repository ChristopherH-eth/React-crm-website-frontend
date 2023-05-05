import React, { useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Footer from "./Footer"
import DropdownButton from "./elements/DropdownButton"
import { URLS, ENDPOINTS } from "../util/config"
import { showAccountFormUtil } from "../util/accountsUtil"
import Loading from "./Loading"

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
    const [columnWidths, setColumnWidths] = React.useState(() =>
        columns.reduce((acc, { id, width }) => ({ ...acc, [id]: width }), {})
    )                                                               // Column objects reduced for resizing
    const [resizingColumn, setResizingColumn] = React.useState()    // Current column being resized

    // useNavigate hook to redirect browser
    const navigate = useNavigate()

    // Accounts API endpoint
    const accountUrl = `${URLS.api}${ENDPOINTS.accountsPage}${page}`

    // Options array for account entry dropdown button
    const options = [
        {value: "edit", label: "Edit"},
        {value: "delete", label: "Delete"},
        {value: "change_owner", label: "Change Owner"}
    ]

    // Component functions stored in accountsUtil
    const showAccountForm = () => showAccountFormUtil()

    // 
    const resizeTimeoutRef = useRef(null)

    /**
     * @brief The handleColumnResize() callback function handles column resizing after a 'resizer' element
     *      gets a mouse down event. It adds event listeners for mouse move and mouse up events to detect
     *      mouse movement (movement distance is used in column width calculation) and mouse button 
     *      release events (to remove event listeners) respectively.
     * @param event The current mouse down event
     * @param column The current column being resized
     */
    const handleColumnResize = (event, column) => {
        const headerCell = event.target.parentNode
        const startX = event.clientX
        const startWidth = headerCell.offsetWidth
      
        /**
         * @brief The handleMouseMove() callback function handles mouse movement after a 'resizer' element
         *      has received a mouse down event. It uses a mouse move event to calculate the distance
         *      the mouse has moved along the x-axis, and uses the requestAnimationFrame() to smooth
         *      the column resizing view for the user.
         * @param event The mouse down event used to calculate move distance
         */
        const handleMouseMove = (event) => {
            cancelAnimationFrame(resizeTimeoutRef.current)

            resizeTimeoutRef.current = requestAnimationFrame(() => {
                const width = Math.max(startWidth + event.clientX - startX, 50)

                // Update the columnWidths state variable with new values
                setColumnWidths((prevWidths) => ({
                    ...prevWidths,
                    [column]: width,
                }))
            })
        }
      
        /**
         * @brief The handleMouseUp() callback function handles mouse up events after a 'resizer' element
         *      has received a mouse down event. It clears the resizingColumn state variable and removes
         *      the mouse move and mouse up event listeners.
         */
        const handleMouseUp = () => {
            // Set the resizingColumn state variable to null
            setResizingColumn(null)

            // Remove mouse up and mouse move event listeners
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
        }

        // Add mouse up and mouse move event listeners
        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseup", handleMouseUp)
    }

    /**
     * @brief The handleResizeStart() callback function sets the resizingColumn state variable to the id
     *      of the currently selected column.
     * @param columnId Id of the current column
     */
    const handleResizeStart = (columnId) => {
        setResizingColumn(columnId)
    }

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
                    setAccountData(data.body.accounts)
                    setIsLoading(false)
                }
            })
            .catch(console.error)
    }, [accountUrl, navigate, setIsLoggedIn])

    // Map contact data
    const accounts = accountData.map((account) => {
        // Account entry url
        const accountEntryUrl = `${URLS.base}${ENDPOINTS.accounts}${account.id}`

        return (
            <tr className="table-data--items" key={account.id}>
                <td className="table-data--borderless--centered table-data--5p">
                    <span className="table-data--content">
                        <Link className="link" to={accountEntryUrl}>{account.id}</Link>
                    </span>
                </td>
                <td className="table-data--borderless--centered table-data--2_5p">
                    <input
                        className="table-data--input"
                        id="accounts--account-selector"
                        type="checkbox"
                    ></input>
                </td>
                {/* Map table column details */}
                {columns.map((column) => {
                    const stringPath = column.col
                    const pathArray = stringPath.split(".")
                    const nestedPropertyValue = pathArray.reduce((obj, key) => obj[key], account)

                    return (
                        <td 
                            key={column.id}
                            className="table-data--borderless"
                            style={
                                {
                                    width: columnWidths[column.id], 
                                    borderRight: `${resizingColumn === column.id ? "2px solid" : "0px"}`
                                }
                            }
                        >
                            <span className="table-data--content">
                                {nestedPropertyValue}
                            </span>
                        </td>
                    )
                })}
                {/* <td 
                    className="table-data--borderless table-data--19_5p"
                    style={{width: columnWidths[]}}
                >
                    <span className="table-data--content">
                        {account.account_name}
                    </span>
                </td>
                <td className="table-data--borderless table-data--17p">
                    <span className="table-data--content">
                        {account.title}
                    </span>
                </td>
                <td className="table-data--borderless table-data--17p">
                    <span className="table-data--content">
                        {account.phone}
                    </span>
                </td>
                <td className="table-data--borderless table-data--17p">
                    <span className="table-data--content">
                        {account.account_owner}
                    </span>
                </td> */}
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

    // Map table column headers
    const tableHeaders = columns.map((column) => {
        // Resizer class CSS
        const resizerClass = `resizer${resizingColumn && 
            resizingColumn === column.id ? " resizing" : ""}`
            
        return (
            <th 
                key={column.id}
                className="table-data"
                style={
                    {
                        width: columnWidths[column.id], 
                        borderRight: `${resizingColumn === column.id ? "2px solid" : ""}`
                    }
                }
            >
                <span className="table-data--content">
                    {column.text}
                </span>
                <div
                    className={resizerClass}
                    onMouseDown={(event) => {
                        handleResizeStart(column.id)
                        handleColumnResize(event, column.id)
                    }}
                />
            </th>
        )
    })

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
                <div className="table-data--table-container">
                    <table className="table-data--table">
                        <tbody>
                            <tr className="table-data--headers">
                                <th className="table-data--end table-data--5p" />
                                <th className="table-data--end table-data--2_5p" />
                                {tableHeaders}
                                {/* <th 
                                    className="table-data table-data--19_5p"
                                    style={{width: columnWidths.accountName}}
                                >
                                    <span className="table-data--content">
                                        Account Name
                                    </span>
                                    <div
                                        className={resizerClass}
                                        onMouseDown={(event) => {
                                            handleColumnResize(event, columns[0].col)
                                        }}
                                    />
                                </th>
                                <th className="table-data table-data--17p">
                                    <span className="table-data--content">
                                        Title
                                    </span>
                                </th>
                                <th className="table-data table-data--17p">
                                    <span className="table-data--content">
                                        Phone
                                    </span>
                                </th>
                                <th className="table-data table-data--17p">
                                    <span className="table-data--content">
                                        Account Owner
                                    </span>
                                </th> */}
                                <th className="table-data--end table-data--5p" />
                            </tr>
                            {accounts}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Accounts