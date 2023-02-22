import { useRouteError } from "react-router-dom"

/**
 * @file ErrorPage.js
 * @author 0xChristopher
 * @brief This file is responsible for the ErrorPage module of the CRM website.
 */

/**
 * @brief The ErrorPage() function builds the error page.
 * @return Returns the error page
 */
function ErrorPage()
{
    const error = useRouteError()                           // Get error from router

    return (
        <div className="error-page">
            <h1>404 Error</h1>
            <p>An unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage