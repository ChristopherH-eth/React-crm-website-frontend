import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { 
    getDisplayUtil, 
    getOptionsUtil, 
    handleInputClickUtil, 
    isSelectedUtil, 
    onItemClickUtil, 
    onSearchUtil
} from "../../util/elements/dropdownSearchUtil"
import DropdownIcon from "./DropdownIcon"

/**
 * @file DropdownSearch.js
 * @author 0xChristopher
 * @brief This file is responsible for the DropdownSearch component of the CRM website.
 */

/**
 * @brief The DropdownSearch() function builds the page dropdown search component.
 * @return Returns the dropdown search component to be added to the page
 */
function DropdownSearch(props)
{
    const {
        placeholder,                        // Placeholder values
        nameField,                          // The name field of the datatype being searched
        url,                                // URL to fetch data from API
        onChange,                           // Callback function to get selected value(s)
        isMulti,                            // True if this is a multi-select search
        isSearchable,                       // True if this field is searchable
        setIsLoggedIn                       // State function to set logged in status
    } = props

    const [showMenu, setShowMenu] = React.useState(false)                           // True is menu is not hidden
    const [options, setOptions] = React.useState([])                                // List of dropdown options
    const [selectedValue, setSelectedValue] = React.useState(isMulti ? [] : null)   // Selected dropdown value
    const [searchValue, setSearchValue] = React.useState("")                        // Current value of the search field

    const navigate = useNavigate()          // useNavigate hook to redirect browser
    const searchRef = useRef()              // useRef hook to focus search bar
    const inputRef = useRef()               // useRef hook for dropdown bar

    // Component functions stored in dropdownSearchUtil file
    const handleInputClick = () => handleInputClickUtil(
        showMenu, setShowMenu, url, setOptions, setIsLoggedIn, navigate
    )
    const getDisplay = () => getDisplayUtil(
        selectedValue, setSelectedValue, placeholder, isMulti, nameField, onChange
    )
    const onSearch = (event) => onSearchUtil(event, setSearchValue)
    const getOptions = () => getOptionsUtil(searchValue, options, nameField)
    const onItemClick = (option) => onItemClickUtil(
        isMulti, option, selectedValue, setSelectedValue, nameField, onChange
    )
    const isSelected = (option) => isSelectedUtil(isMulti, option, selectedValue, nameField)

    // Window event listener to close the dropdown menu if the user selects elsewhere on the page
    React.useEffect(() => {
        const handler = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target))
                setShowMenu(false)
        }

        window.addEventListener("click", handler)

        return () => window.removeEventListener("click", handler)
    })
    
    // When the dropdown search menu is opened, focus it
    React.useEffect(() => {
        setSearchValue("")

        if (showMenu && searchRef.current)
            searchRef.current.focus()
    }, [showMenu])

    return (
        <div className="dropdown-button--container">
            <div 
                className="dropdown-button--input" 
                onClick={handleInputClick}
                ref={inputRef}
            >
                <div className="dropdown-button--selected-value">
                    {getDisplay()}
                </div>
                <div className="dropdown-button--tools">
                    <div className="dropdown-button--tool">
                        <DropdownIcon />
                    </div>
                </div>
                {showMenu && (
                    <div className="dropdown-button--menu">
                        {isSearchable && (
                            <div className="dropdown-search--box">
                                <input 
                                    className="dropdown-search--box--input"
                                    onChange={onSearch} 
                                    value={searchValue} 
                                    ref={searchRef} 
                                />
                            </div>
                        )}
                        {getOptions().map((option) => (
                            <div 
                                className={`dropdown-button--item ${isSelected(option) && "selected"}`}
                                key={option.id}
                                onClick={() => onItemClick(option)}
                            >
                                {option[nameField]}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default DropdownSearch