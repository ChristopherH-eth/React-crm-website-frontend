/**
 * @file fieldUtil.js
 * @author 0xChristopher
 * @brief This file is responsible for housing field component functions.
 */

/**
 * @brief The preventNullInput() function prevents newly rendered fields from having null values.
 * @param inputValue The field input value at render
 */
function preventNullInputUtil(inputValue)
{
    if (inputValue === null)
        return ""
    else
        return inputValue
}

export { preventNullInputUtil }