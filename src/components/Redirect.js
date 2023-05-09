import React from "react"
import { useNavigate } from "react-router-dom"

/**
 * @file Redirect.js
 * @author 0xChristopher
 * @brief This file is responsible for the Redirect component of the CRM website.
 */

/**
 * @brief The Redirect() function builds the page redirect component.
 */
function Redirect(props)
{
    const {
        newUrl                                      // URL to redirect to
    } = props

    // useNavigate hook to redirect browser
    const navigate = useNavigate()

    // Redirect browser on component mount
    React.useEffect(() => {
        navigate(newUrl, { replace: true })
    }, [navigate, newUrl])

    return null
}

export default Redirect