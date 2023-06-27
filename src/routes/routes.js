import { createBrowserRouter } from "react-router-dom"
import App from "../components/App"
import ErrorPage from "../components/ErrorPage"
import Main from "../components/Main"
import Collections from "../components/Collections"
import AccountForm from "../components/forms/AccountForm"
import ContactForm from "../components/forms/ContactForm"
import LeadForm from "../components/forms/LeadForm"
import Login from "../components/Login"
import EntryDetails from "../components/containers/EntryDetails"
import Redirect from "../components/Redirect"

/**
 * @brief The getRouter() function establishes the internal routes for the CRM front end
 * @param user The current user
 * @param setUser Sets the current user
 * @param isLoggedIn User logged in status
 * @param setIsLoggedIn React state function to set logged in status
 * @param isNew Form status where true is new and false is edit
 * @param setIsNew React state function to set form status
 * @returns Returns the router object to be used with RouterProvider
 */
function getRouter(user, setUser, isLoggedIn, setIsLoggedIn, isNew, setIsNew)
{
    // Browser router for url based routing in React
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App
                user={user}
                setUser={setUser}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Main setIsLoggedIn={setIsLoggedIn} />
                },
                {
                    path: "login/",
                    element: <Login setIsLoggedIn={setIsLoggedIn} />
                },
                {
                    path: "contacts/page/",
                    element: <Redirect newUrl={"../contacts/page/1"} />
                },
                {
                    path: "accounts/page/",
                    element: <Redirect newUrl={"../accounts/page/1"} />
                },
                {
                    path: "leads/page/",
                    element: <Redirect newUrl={"../leads/page/1"} />
                },
                {
                    path: "opportunities/page/",
                    element: <Redirect newUrl={"../opportunities/page/1"} />
                },
                {
                    path: ":type/page/:page",
                    element: <>
                        <Collections 
                            setIsLoggedIn={setIsLoggedIn} 
                            setIsNew={setIsNew}
                        />
                        <AccountForm 
                            user={user}
                            isNew={isNew}
                        />
                        <ContactForm 
                            user={user}
                            isNew={isNew} 
                        />
                        <LeadForm 
                            user={user}
                            isNew={isNew}
                        />
                    </>
                },
                {
                    path: ":type/:id/",
                    element: <EntryDetails setIsLoggedIn={setIsLoggedIn} />
                }
            ]
        }
    ])

    return router
}

export { getRouter }