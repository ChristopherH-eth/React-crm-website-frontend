/**
 * @file Subheader.js
 * @author 0xChristopher
 * @brief This file is responsible for the Subheader component of the CRM website.
 */

/**
 * @brief The Subheader() function builds a subheader field component.
 * @return Returns the subheader field component to be added to the page
 */
function Subheader(props)
{
    const {
        label
    } = props

    return (
        <div className="subheader">
            {label}
        </div>
    )
}

export default Subheader