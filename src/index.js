import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./styles.css"
import App from "./components/App"
import ErrorPage from "./components/ErrorPage"
import Main from "./components/Main"
import Contacts from "./components/Contacts"
import Accounts from "./components/Accounts"
import Leads from "./components/Leads"
import AccountForm from "./components/forms/AccountForm"
import ContactForm from "./components/forms/ContactForm"
import LeadForm from "./components/forms/LeadForm"
import Login from "./components/Login"

/**
 * @file index.js
 * @author 0xChristopher
 * @brief This file is simply responsible for rendering the application.
 */

// Browser router for url based routing in React
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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
                element: <><Contacts /><ContactForm /></>
            },
            {
                path: "accounts/",
                element: <><Accounts /><AccountForm /></>
            },
            {
                path: "leads/",
                element: <><Leads /><LeadForm /></>
            }
        ]
    }
]);

// Root element to render page
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router = {router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
