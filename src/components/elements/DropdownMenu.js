import React, { useRef } from "react"
import { handleInputClickUtil } from "../../util/elements/dropdownUtil"

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

    // Component functions stored in dropdownUtil file
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
        <button className="secondary-button">
            <div 
                onClick={handleInputClick}
                ref={inputRef}
            >
                {action.text}
                {show && <div>
                    Test
                </div>}
            </div>
        </button>
    )
}

export default DropdownMenu