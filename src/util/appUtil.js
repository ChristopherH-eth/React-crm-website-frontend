/**
 * @file appUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the App component.
 */

/**
 * @brief The selectWindow() function closes menus and popups if the user clicks outside of it.
 * @param event The window event to be handled
 */
function selectWindow(event) 
{
    // Dropdown menus
    if (!event.target.matches(".dropbutton")) 
    {
        const dropdowns = document.getElementsByClassName("dropdown-button--menu")

        for (let i = 0; i < dropdowns.length; i++) 
        {
            let openDropdown = dropdowns[i]

            if (openDropdown.classList.contains("show"))
                openDropdown.classList.remove("show")
        }
    }
}

export { selectWindow }