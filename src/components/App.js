import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import ContactForm from "./ContactForm"

/**
 * @file App.js
 * @author 0xChristopher
 * @brief This file imports the main components of the page and returns them as the main 'App'
 *      component.
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
            <ContactForm />
        </div>
    )
}

export default App