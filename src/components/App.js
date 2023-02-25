import Header from "./Header"
import Footer from "./Footer"
import Forms from "./forms/Forms"
import { Outlet } from "react-router-dom"
import { selectWindow } from "../util/appUtil"

/**
 * @file App.js
 * @author 0xChristopher
 * @brief This file imports the main components of the page and returns them as the main 'App'
 *      component.
 */

window.onclick = selectWindow                       // Window event handler

/**
 * @brief The App() function builds the page app component.
 * @return Returns the app component to be added to the page
 */
function App()
{
    return (
        <div className="app-container">
            <Header />
            <Outlet />
            <Footer />
            {/* Login Page Mask (dimmed background) */}
            <div className="page-mask" id="page-mask" />
            <Forms />
        </div>
    )
}

export default App