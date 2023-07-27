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
    // Form input field array
    const formInputs = document.getElementsByClassName(classToClear)

    // Clear input fields
    for (let i = 0; i < formInputs.length; i++) 
        formInputs[i].value = ""
}

/**
 * @brief The resetScrollBar() function resets the position of the vertical scroll bar of a form.
 * @param formRef Reference to the form being destroyed
 */
function resetScrollBar(formRef)
{
    // If the form reference is the current reference reset the scroll bar position
    if (formRef.current)
        formRef.current.scrollTop = 0
}

/**
 * @brief The hideForm() function hides the current form and page mask.
 */
function hideForm()
{
    const pageMask = document.getElementsByClassName("page-mask")
    const form = document.getElementsByClassName("form-container")

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

    // Make body scrollable
    document.body.classList.remove("lock-scroll")
}

/**
 * @brief The destroyForm() function clears the fields of the current form and hides it.
 * @param classToClear The class of the form name to clear
 * @param formRef Reference to the form being destroyed
 */
function destroyFormUtil(classToClear, formRef)
{
    clearCurrentFields(classToClear)
    resetScrollBar(formRef)
    hideForm()
}

/**
 * @brief The handleSubmitUtil() function is used to listen for events when form input fields are selected, 
 *      check if the event was triggered by the user pressing the "Enter" key, and if so, submit the 
 *      selected form.
 * @param event An event picked up by the event listener
 * @param submitForm A reference to the form submission function
 */
function handleSubmitUtil(event, submitForm)
{
    // If the key pressed is the "Enter" key then submit the form
    if (event.key === "Enter")
        submitForm()
}

export { clearCurrentFields, hideForm, destroyFormUtil, handleSubmitUtil }