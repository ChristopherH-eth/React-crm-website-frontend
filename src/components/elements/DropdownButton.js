import React, { useRef } from "react"
import { 
    editEntryUtil, 
    deleteEntryUtil, 
    changeOwnerUtil, 
    handleInputClickUtil 
} from "../../util/elements/dropdownButtonUtil"
import DropdownIcon from "./DropdownIcon"

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
        type,                                               // Data type to interact with
        entryId,                                            // Current row data entry
        setIsLoggedIn,                                      // State function for isLoggedIn variable
        navigate,                                           // useNavigate hook to redirect browser
        pageUrl,                                            // Page fetch url
        setCollectionData,                                  // State function for collectionData variable
        setIsLoading,                                       // State function for isLoading variable
        setIsNew,                                           // State function for isNew variable
        setSelectedEntry                                    // State function for selectedEntry variable
    } = props

    // State variable for whether to show the menu
    const [showMenu, setShowMenu] = React.useState(false)

    // useRef hook for dropdown menu
    const inputRef = useRef()

    // Component functions stored in dropdownButtonUtil file
    const handleInputClick = () => handleInputClickUtil(showMenu, setShowMenu)

    // Options array for entry dropdown button
    const options = [
        {value: "edit", label: "Edit", function: () => editEntryUtil(
            type, entryId, setIsLoggedIn, navigate, setIsNew, setSelectedEntry
        )},
        {value: "delete", label: "Delete", function: () => deleteEntryUtil(
            type, entryId, setIsLoggedIn, navigate, pageUrl, setCollectionData, setIsLoading
        )},
        {value: "change_owner", label: "Change Owner", function: () => changeOwnerUtil(type, entryId)}
    ]

    // Placeholder text
    const placeholder = ""

    // Window event listener to close the dropdown menu if the user selects elsewhere on the page
    React.useEffect(() => {
        const handler = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target))
                setShowMenu(false)
        }

        window.addEventListener("click", handler)

        return () => window.removeEventListener("click", handler)
    })

    return (
        <div className="dropdown-button--container">
            <div 
                className="dropdown-button--input" 
                onClick={handleInputClick}
                ref={inputRef}
            >
                <div className="dropdown-button--selected-value">
                    {placeholder}
                </div>
                <div className="dropdown-button--tools">
                    <div className="dropdown-button--tool">
                        <DropdownIcon />
                    </div>
                </div>
                {showMenu && <div className="dropdown-button--menu">
                    {options.map((option) => (
                        <div 
                            className="dropdown-button--item" 
                            key={option.value}
                            onClick={option.function}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default DropdownButton