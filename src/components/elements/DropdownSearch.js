import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"

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
        isSearchable                        // True if this field is searchable
    } = props

    const [showMenu, setShowMenu] = React.useState(false)
    const [options, setOptions] = React.useState([])
    const [selectedValue, setSelectedValue] = React.useState(isMulti ? [] : null)
    const [searchValue, setSearchValue] = React.useState("")

    const navigate = useNavigate()
    const searchRef = useRef()
    const inputRef = useRef()

    /**
     * @brief The Icon() function uses an SVG element to draw the dropdown button icon.
     * @returns Returns the drawn icon
     */
    const Icon = () => {
        return (
            <svg height="20" width="20" viewBox="0 0 20 20">
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
            </svg>
        )
    }

    /**
     * @brief The CloseIcon() function uses an SVG element to draw the dropdown button icon.
     * @returns Returns the drawn icon
     */
    const CloseIcon = () => {
        return (
            <svg height="20" width="20" viewBox="0 0 20 20">
                <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
            </svg>
        );
    };

    /**
     * @brief The handleInputClick() function hides the dropdown menu when the dropdown input itself or
     *      an option is selected.
     */
    const handleInputClick = () => {
        setShowMenu(!showMenu)
        fillSearch()
    }

    /**
     * @brief The getDisplay() function retrieves the selected value(s) to display or else is displays
     *      a placeholder value.
     * @return Returns the currently selected value in a single search; multiple values for a multi-search;
     *      and the placeholder value when no items are selected
     */
    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0)
            return placeholder

        if (isMulti)
        {
            return (
                <div className="dropdown-multi--tags">
                    {selectedValue.map((option) => (
                        <div className="dropdown-multi--tags--item" key={option.id}>
                            {option[nameField]}
                            <span 
                                className="dropdown-multi--tags--close"
                                onClick={(event) => onTagRemove(event, option)}
                            >
                                <CloseIcon />
                            </span>
                        </div>
                    ))}
                </div>
            )
        }
        
        return selectedValue[nameField]
    }

    /**
     * @brief The onSearch() function handles user input in search box.
     * @param event The event to be handled
     */
    const onSearch = (event) => setSearchValue(event.target.value)

    /**
     * @brief The getOptions() function renders menu options based on search input. If search input is empty,
     *      we default to the full list of options.
     */
    const getOptions = () => {
        if (!searchValue)
            return options

        return options.filter((option) => 
            option[nameField].toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
    }

    /**
     * @brief The removeOption() function removes a given option by filtering it out.
     * @param option The option being filtered
     */
    const removeOption = (option) => {
        return selectedValue.filter((x) => x[nameField] !== option[nameField])
    }

    /**
     * @brief The onTagRemove() function removes the selected option.
     * @param option The option to be removed
     */
    const onTagRemove = (option) => {
        const newValue = removeOption(option)

        setSelectedValue(newValue)
        onChange(newValue)
    }

    /**
     * @brief The onItemClick() function sets the current selected option as the selected option. When 
     *      dealing with multi-select, selecting a value adds it to the selected array, while selected
     *      an item that has already been selected deselects it and removes it.
     * @param option The option being selected
     */
    const onItemClick = (option) => {
        let newValue

        // Check if we're dealing with a multi-select field, otherwise simply select the clicked value
        if (isMulti)
        {
            // Deselect a selected item or else add an item to the selected array
            if (selectedValue.findIndex((x) => x[nameField] === option[nameField]) >= 0)
                newValue = removeOption(option)
            else
                newValue = [...selectedValue, option]
        }
        else
        {
            newValue = option
        }

        setSelectedValue(newValue)
        onChange(newValue)
    }

    /**
     * @brief The isSelected() function returns true if the selected value matches the current option, or
     *      else it returns false. It also returns false if there are no selected values.
     * @param option The option being selected
     * @return Returns true if the option value matches the currently selected option
     */
    const isSelected = (option) => {
        if (isMulti)
            return selectedValue.filter((x) => x[nameField] === option[nameField]).length > 0

        if (!selectedValue)
            return false

        return selectedValue[nameField] === option[nameField]
    }

    /**
     * @brief The fillSearch() function fills the DropdownSearch component with relevant values to
     *      choose from.
     */
    const fillSearch = () => {
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
                    setOptions(data.body)
            })
            .catch(console.error)
    }

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
                        <Icon />
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