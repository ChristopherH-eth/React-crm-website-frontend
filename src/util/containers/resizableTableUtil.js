import { Link } from "react-router-dom"
import DropdownButton from "../../components/elements/DropdownButton"
import { URLS, ENDPOINTS } from "../config"

/**
 * @file resizableTableUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in ResizableTable component manipulation.
 */

/**
 * @brief The handleColumnResize() callback function handles column resizing after a 'resizer' element
 *      gets a mouse down event. It adds event listeners for mouse move and mouse up events to detect
 *      mouse movement (movement distance is used in column width calculation) and mouse button 
 *      release events (to remove event listeners) respectively.
 * @param event The current mouse down event
 * @param column The current column being resized
 * @param setResizingColumn Function to set the state variable resizingColumn
 * @param setColumnWidths Function to set the state variable columnWidths
 * @param resizeTimeoutRef Timeout reference for column resize animation
 */
function handleColumnResize(
    event, 
    column,  
    setResizingColumn, 
    setColumnWidths,
    resizeTimeoutRef) 
{
    const headerCell = event.target.parentNode
    const startX = event.clientX
    const startWidth = headerCell.offsetWidth

    /**
     * @brief The handleMouseMove() callback function handles mouse movement after a 'resizer' element
     *      has received a mouse down event. It uses a mouse move event to calculate the distance
     *      the mouse has moved along the x-axis, and uses the requestAnimationFrame() to smooth
     *      the column resizing animation for the user.
     * @param event The mouse down event used to calculate move distance
     */
    const handleMouseMove = (event) => {
        // Cancel previously scheduled callback requests
        cancelAnimationFrame(resizeTimeoutRef.current)

        // Schedule callback to be executed in browser's next animation frame
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
        // Set the resizingColumn state variable and resizeTimeoutRef to null
        setResizingColumn(null)
        resizeTimeoutRef.current = null

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
 * @param setResizingColumn Function to set the state variable resizingColumn
 */
function handleResizeStart(columnId, setResizingColumn) 
{
    setResizingColumn(columnId)
}

/**
 * @brief The mapTableDataUtil() function
 * @param type The data type of the dataEntries objects
 * @param dataEntries Objects to be mapped and returned to the table
 * @param columns The columns array to be mapped against
 * @param columnWidths Array of column width objects
 * @param resizingColumn Marker for the currently resizing column
 * @param pageUrl Page fetch url
 * @param setCollectionData State function for collectionData variable
 * @param setIsLoading State function for isLoading variable
 * @param setIsNew State function for isNew variable
 * @param setSelectedEntry State function for selectedEntry variable
 * @returns Returns '<tr>' elements and their children that have been mapped
 */
function mapTableDataUtil(
    type, 
    columns, 
    dataEntries, 
    columnWidths, 
    resizingColumn, 
    setIsLoggedIn, 
    navigate,
    pageUrl,
    setCollectionData,
    setIsLoading,
    setIsNew,
    setSelectedEntry)
{
    // Map data entries
    const data = dataEntries.map((dataEntry) => {
        // Data entry url
        const dataUrl = `${URLS.base}${ENDPOINTS[type]}/${dataEntry.id}`

        // Returns a table row with mapped table details
        return (
            <tr className="items" key={dataEntry.id}>
                <td className="borderless--centered table-cell-5p">
                    <span className="table-cell-content">
                        <Link className="link" to={dataUrl}>{dataEntry.id}</Link>
                    </span>
                </td>
                <td className="borderless--centered table-cell-2_5p">
                    <input
                        className="input"
                        id="accounts--account-selector"
                        type="checkbox"
                    ></input>
                </td>
                {mapColumns(columns, dataEntry, columnWidths, resizingColumn)}
                <td className="borderless--centered table-cell-5p">
                    <DropdownButton
                        type={type}
                        entryId={dataEntry.id}
                        setIsLoggedIn={setIsLoggedIn}
                        navigate={navigate}
                        pageUrl={pageUrl}
                        setCollectionData={setCollectionData}
                        setIsLoading={setIsLoading}
                        setIsNew={setIsNew}
                        setSelectedEntry={setSelectedEntry}
                    />
                </td>
            </tr>
        )
    })

    // Returns table rows with mapped columns
    return data
}

/**
 * @brief The mapTableHeaderUtil() function maps table header data from the columns object array to 
 *      their respective columns.
 * @param columns The columns array to be mapped against
 * @param columnWidths Array of column width objects
 * @param resizingColumn Marker for the currently resizing column
 * @param setResizingColumn Function to set the state variable resizingColumn
 * @param setColumnWidths Function to set the state variable columnWidths
 * @param resizeTimeoutRef Timeout reference for column resize animation
 * @returns Returns a '<tr>' element with mapped table headers
 */
function mapTableHeadersUtil(
    columns, 
    columnWidths, 
    resizingColumn, 
    setResizingColumn, 
    setColumnWidths, 
    resizeTimeoutRef)
{
    // Map table column headers
    const tableHeaders = columns.map((column) => {
        // Resizer class CSS
        const resizerClass = `resizer${resizingColumn && 
            resizingColumn === column.id ? " resizing" : ""}`
            
        // Return mapped table headers
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
                <span className="table-cell-content">
                    {column.text}
                </span>
                {/* Resizer element to handle Mouse Down events and column resizing */}
                <div
                    className={resizerClass}
                    onMouseDown={(event) => {
                        handleResizeStart(column.id, setResizingColumn)
                        handleColumnResize(
                            event, 
                            column.id, 
                            setResizingColumn, 
                            setColumnWidths, 
                            resizeTimeoutRef
                        )
                    }}
                />
            </th>
        )
    })

    // Returns a table row
    return (
        <tr className="headers">
            <th className="end table-cell-5p" />
            <th className="end table-cell-2_5p" />
            {tableHeaders}
            <th className="end table-cell-5p" />
        </tr>
    )
}

/**
 * @brief The mapColumns() function maps column data for each dataEntry object to its respective column.
 * @param columns The columns array to be mapped against
 * @param dataEntry The object to be mapped to respective columns
 * @param columnWidths Array of column width objects
 * @param resizingColumn Marker for the currently resizing column
 * @returns Returns '<td>' elements that have been mapped
 */
function mapColumns(columns, dataEntry, columnWidths, resizingColumn)
{
    // Map table column details
    const columnData = columns.map((column) => {
        const stringPath = column.col
        const pathArray = stringPath.split(".")
        const nestedPropertyValue = pathArray.reduce((obj, key) => obj[key], dataEntry)

        // Return mapped table details
        return (
            <td 
                key={column.id}
                className="borderless"
                style={
                    {
                        width: columnWidths[column.id], 
                        borderRight: `${resizingColumn === column.id ? "2px solid" : "0px"}`
                    }
                }
            >
                <span className="table-cell-content">
                    {nestedPropertyValue}
                </span>
            </td>
        )
    })

    // Returns table details for row placement
    return columnData
}

export { mapTableDataUtil, mapTableHeadersUtil, mapColumns }