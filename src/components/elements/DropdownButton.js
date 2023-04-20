import React from "react"

/**
 * @file DropdownButton.js
 * @author 0xChristopher
 * @brief This file is responsible for the DropdownButton component of the CRM website.
 */

/**
 * @brief The DropdownButton() function builds the page dropdown button component.
 * @return Returns the dropdown button component to be added to the page
 */
function DropdownButton(props)
{
    const {
        placeholder,
        options
    } = props

    const [showMenu, setShowMenu] = React.useState(false)

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
     * @brief The handleInputClick() function hides the dropdown menu when the dropdown input itself or
     *      an option is selected.
     * @param event The click event that is listened for to close the menu
     */
    const handleInputClick = (event) => {
        event.stopPropagation()
        setShowMenu(!showMenu)
    }

    return (
        <div className="dropdown-button--container">
            <div className="dropdown-button--input" onClick={handleInputClick}>
                <div className="dropdown-button--selected-value">
                    {placeholder}
                </div>
                <div className="dropdown-button--tools">
                    <div className="dropdown-button--tool">
                        {Icon()}
                    </div>
                </div>
                {showMenu && <div className="dropdown-button--menu">
                    {options.map((option) => (
                        <div className="dropdown-button--item" key={option.value}>
                            {option.label}
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default DropdownButton