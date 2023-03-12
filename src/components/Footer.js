/**
 * @file Footer.js
 * @author 0xChristopher
 * @brief This file is responsible for the Footer component of the CRM website.
 */

/**
 * @brief The Footer() function builds the page footer component.
 * @return Returns the footer component to be added to the page
 */
function Footer(props)
{
    const {
        isLoggedIn
    } = props

    return (
        <>
            {isLoggedIn ? (
                <footer className="footer">
                    &copy; 2022 Christopher Hardy. All rights reserved.
                </footer>
            ) : (
                <div></div>
            )}
        </>
    )
}

export default Footer