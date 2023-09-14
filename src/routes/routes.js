import { createBrowserRouter } from "react-router-dom"
import App from "../components/App"
import ErrorPage from "../components/ErrorPage"
import Main from "../components/Main"
import Collections from "../components/Collections"
import CollectionsForm from "../components/forms/CollectionsForm"
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
 * @param selectedEntry The currently selected entry for use in forms
 * @param setSelectedEntry React state function to set the selected entry
 * @returns Returns the router object to be used with RouterProvider
 */
function getRouter(
    user, 
    setUser, 
    isLoggedIn, 
    setIsLoggedIn, 
    isNew, 
    setIsNew, 
    selectedEntry, 
    setSelectedEntry)
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
                            setSelectedEntry={setSelectedEntry}
                        />
                        <CollectionsForm 
                            setIsLoggedIn={setIsLoggedIn}
                            user={user}
                            isNew={isNew}
                            selectedEntry={selectedEntry}
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