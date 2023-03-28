/**
 * @file util.js
 * @author 0xChristopher
 * @brief This file contains utility functions for the CRM Application.
 */

/**
 * @brief The clearCurrentFields() function clears the fields of the current form, typically top level.
 * @param classToClear The class of the form name to clear
 */
function clearCurrentFields(classToClear) 
{
    const formInputs = document.getElementsByClassName(classToClear)            // Form input field array

        // Clear input fields
        for (let i = 0; i < formInputs.length; i++) 
            formInputs[i].value = ""
}

export { clearCurrentFields }