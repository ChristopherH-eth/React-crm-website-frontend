import React, { useRef } from "react"
import { handleInputClickUtil } from "../../util/elements/dropdownButtonUtil"

/**
 * @file DropdownMenu.js
 * @author 0xChristopher
 * @brief This file is responsible for the DropdownMenu component of the CRM website.
 */

/**
 * @brief The DropdownMenu() function builds the page dropdown menu component.
 * @return Returns the dropdown menu component to be added to the page
 */
function DropdownMenu(props)
{
    const {
        action                                              // Action object from ActionBar
    } = props

    // State variable for whether to show the menu
    const [show, setShow] = React.useState(false)

    // useRef hook for dropdown menu
    const inputRef = useRef()

    // Component functions stored in dropdownButtonUtil file
    const handleInputClick = () => handleInputClickUtil(show, setShow)

    // Window event listener to close the dropdown menu if the user selects elsewhere on the page
    React.useEffect(() => {
        const handler = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target))
                setShow(false)
        }

        window.addEventListener("click", handler)

        return () => window.removeEventListener("click", handler)
    })

    return (
        <button 
            className="secondary-button"
            onClick={handleInputClick}
            ref={inputRef}
        >
            <div className="dropdown-menu--container">
                {action.text}
                {show && <div className="dropdown-menu">
                    {/* Map Dropdown Menu */}
                    {action.menu.map((menuItem) =>
                        <div 
                            className="dropdown-menu--item"
                            key={menuItem.id}
                        >
                            {menuItem.text}
                        </div>
                    )}
                </div>}
            </div>
        </button>
    )
}

export default DropdownMenu