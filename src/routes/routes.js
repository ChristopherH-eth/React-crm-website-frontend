import { createBrowserRouter } from "react-router-dom"
import App from "../components/App"
import ErrorPage from "../components/ErrorPage"
import Main from "../components/Main"
import Contacts from "../components/Contacts"
import Accounts from "../components/Accounts"
import Leads from "../components/Leads"
import AccountForm from "../components/forms/AccountForm"
import ContactForm from "../components/forms/ContactForm"
import LeadForm from "../components/forms/LeadForm"
import Login from "../components/Login"

/**
 * @brief The getRouter() function establishes the internal routes for the CRM front end
 * @param user The current user
 * @param setUser Sets the current user
 * @returns Returns the router object to be used with RouterProvider
 */
function getRouter(user, setUser)
{
    // Browser router for url based routing in React
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App
                user={user}
                setUser={setUser}
            />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Main />
                },
                {
                    path: "login/",
                    element: <Login />,
                    errorElement: <ErrorPage />
                },
                {
                    path: "contacts/",
                    element: <><Contacts /><ContactForm user={user} /></>
                },
                {
                    path: "accounts/",
                    element: <><Accounts /><AccountForm user={user} /></>
                },
                {
                    path: "leads/",
                    element: <><Leads /><LeadForm user={user} /></>
                }
            ]
        }
    ])

    return router
}

export { getRouter }