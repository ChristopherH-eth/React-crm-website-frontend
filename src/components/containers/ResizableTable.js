import React, { useRef } from "react"
import { mapTableDataUtil, mapTableHeadersUtil } from "../../util/containers/resizableTableUtil"

/**
 * @file Resizable.js
 * @author 0xChristopher
 * @brief This file is responsible for the Resizable component of the CRM website.
 */

function ResizableTable(props)
{
    const {
        type,                                                       // dataEntries data type
        columns,                                                    // Column objects to help with mapping
        dataEntries,                                                // Objects to be mapped to table
        setIsLoggedIn,                                              // State function for isLoggedIn variable
        navigate,                                                   // useNavigate hook to redirect browser
        pageUrl,                                                    // Page fetch url
        setCollectionData,                                          // State function for collectionData variable
        setIsLoading                                                // State function for isLoading variable
    } = props

    const [columnWidths, setColumnWidths] = React.useState(() =>
        columns.reduce((column, { id, width }) => ({ ...column, [id]: width }), {})
    )                                                               // Column objects array reduced for resizing
    const [resizingColumn, setResizingColumn] = React.useState()    // Current column being resized

    // Component functions stored in tableUtil
    const mapTableData = () => mapTableDataUtil(
        type, 
        columns, 
        dataEntries, 
        columnWidths, 
        resizingColumn, 
        setIsLoggedIn, 
        navigate, 
        pageUrl,
        setCollectionData,
        setIsLoading
    )
    const mapTableHeaders = () => mapTableHeadersUtil(
        columns, 
        columnWidths, 
        resizingColumn, 
        setResizingColumn, 
        setColumnWidths, 
        resizeTimeoutRef
    )

    // Timeout reference for column resize animation
    const resizeTimeoutRef = useRef(null)

    return (
        <div className="table-data--table-container">
            <table className="table-data--table">
                <tbody>
                    {mapTableHeaders()}
                    {mapTableData()}
                </tbody>
            </table>
        </div>
    )
}

export default ResizableTable