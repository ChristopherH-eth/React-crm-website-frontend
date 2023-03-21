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
        const dropdowns = document.getElementsByClassName("dropbutton--content")

        for (let i = 0; i < dropdowns.length; i++) 
        {
            let openDropdown = dropdowns[i]

            if (openDropdown.classList.contains("show"))
                openDropdown.classList.remove("show")
        }
    }

    // Popups and page mask
    if (event.target.matches("#page-mask") || event.target.matches(".form-container") 
        || event.target.matches("#form--cancel"))
    {
        const pageMask = document.getElementsByClassName("page-mask")
        const form = document.getElementsByClassName("form-container")
        const formInputs = document.getElementsByClassName("form--input-field")

        // Check for active page mask
        for (let i = 0; i < pageMask.length; i++) 
        {
            let openPageMask = pageMask[i]

            if (openPageMask.classList.contains("show"))
                openPageMask.classList.remove("show")
        }

        // Check for active form
        for (let i = 0; i < form.length; i++) 
        {
            let openForm = form[i]

            if (openForm.classList.contains("show"))
                openForm.classList.remove("show")
        }

        // Clear input fields if they still contain text
        for (let i = 0; i < formInputs.length; i++)
            formInputs[i].value = ""

        // Make body scrollable
        document.body.classList.remove("lock-scroll")
    }
}

export { selectWindow }