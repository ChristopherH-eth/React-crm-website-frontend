/**
 * @file dropdownSearchUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in DropdownSearch component manipulation.
 */

/**
 * @brief The CloseIcon() function uses an SVG element to draw the dropdown button icon.
 * @returns Returns the drawn icon
 */
const CloseIcon = () => {
    return (
        <svg height="20" width="20" viewBox="0 0 20 20">
            <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
        </svg>
    )
}

/**
 * @brief The handleInputClickUtil() function hides the dropdown menu when the dropdown input itself or
 *      an option is selected.
 * @param showMenu True is menu is not hidden
 * @param url URL to fetch data from API
 * @param setOptions State function for list of dropdown options
 * @param setIsLoggedIn State function to set logged in status
 * @param navigateuseNavigate hook to redirect browser
 */
function handleInputClickUtil(showMenu, setShowMenu, url, setOptions, setIsLoggedIn, navigate)
{
    setShowMenu(!showMenu)
    fillSearch(url, setOptions, setIsLoggedIn, navigate)
}

/**
 * @brief The getDisplayUtil() function retrieves the selected value(s) to display or else is displays
 *      a placeholder value.
 * @param selectedValue Selected dropdown value
 * @param setSelectedValue State function for selected dropdown value
 * @param placeholder Placeholder values
 * @param isMulti True if this is a multi-select search
 * @param nameField The name field of the datatype being searched
 * @param onChange Callback function to get selected value(s)
 * @return Returns the currently selected value in a single search; multiple values for a multi-search;
 *      and the placeholder value when no items are selected
 */
function getDisplayUtil(selectedValue, setSelectedValue, placeholder, isMulti, nameField, onChange)
{
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
                            onClick={(event) => onTagRemove(event, option, setSelectedValue, onChange)}
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
 * @brief The onSearchUtil() function handles user input in search box.
 * @param event The event to be handled
 * @param setSearchValue State function for current value of the search field
 */
function onSearchUtil(event, setSearchValue) 
{
    setSearchValue(event.target.value)
}

/**
 * @brief The getOptionsUtil() function renders menu options based on search input. If search input is empty,
 *      we default to the full list of options.
 * @param searchValue Current value of the search field
 * @param options List of dropdown options
 * @param nameField The name field of the datatype being searched
 */
function getOptionsUtil(searchValue, options, nameField)
{
    if (!searchValue)
        return options

    return options.filter((option) => 
        option[nameField].toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
}

/**
 * @brief The removeOption() function removes a given option by filtering it out.
 * @param selectedValue Selected dropdown value
 * @param option The option being filtered
 * @param nameField The name field of the datatype being searched
 */
function removeOption(selectedValue, option, nameField)
{
    return selectedValue.filter((x) => x[nameField] !== option[nameField])
}

/**
 * @brief The onTagRemoveUtil() function removes the selected option.
 * @param option The option to be removed
 * @param setSelectedValue State function for selected dropdown value
 * @param onChange Callback function to get selected value(s)
 */
function onTagRemove(option, setSelectedValue, onChange)
{
    const newValue = removeOption(option)

    setSelectedValue(newValue)
    onChange(newValue)
}

/**
 * @brief The onItemClickUtil() function sets the current selected option as the selected option. When 
 *      dealing with multi-select, selecting a value adds it to the selected array, while selected
 *      an item that has already been selected deselects it and removes it.
 * @param isMulti True if this is a multi-select search
 * @param option The option being selected
 * @param selectedValue Selected dropdown value
 * @param setSelectedValue State function for selected dropdown value
 * @param nameField The name field of the datatype being searched
 * @param onChange Callback function to get selected value(s)
 */
function onItemClickUtil(isMulti, option, selectedValue, setSelectedValue, nameField, onChange)
{
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
 * @brief The isSelectedUtil() function returns true if the selected value matches the current option, or
 *      else it returns false. It also returns false if there are no selected values.
 * @param isMulti True if this is a multi-select search
 * @param option The option being selected
 * @param selectedValue Selected dropdown value
 * @param nameField The name field of the datatype being searched
 * @return Returns true if the option value matches the currently selected option
 */
function isSelectedUtil(isMulti, option, selectedValue, nameField)
{
    if (isMulti)
        return selectedValue.filter((x) => x[nameField] === option[nameField]).length > 0

    if (!selectedValue)
        return false

    return selectedValue[nameField] === option[nameField]
}

/**
 * @brief The fillSearch() function fills the DropdownSearch component with relevant values to
 *      choose from.
 * @param url URL to fetch data from API
 * @param setOptions State function for list of dropdown options
 * @param setIsLoggedIn State function to set logged in status
 * @param navigate useNavigate hook to redirect browser
 */
function fillSearch(url, setOptions, setIsLoggedIn, navigate)
{
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
                setOptions(data.body.accounts)
        })
        .catch(console.error)
}

export { 
    isSelectedUtil, 
    onItemClickUtil, 
    getOptionsUtil,
    onSearchUtil,
    getDisplayUtil,
    handleInputClickUtil
}