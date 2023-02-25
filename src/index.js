import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import App from './components/App'
import ErrorPage from './components/ErrorPage'
import Main from './components/Main'
import Contacts from './components/Contacts'
import Accounts from './components/Accounts'

/**
 * @file index.js
 * @author 0xChristopher
 * @brief This file is simply responsible for rendering the application.
 */

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
                path: "contacts/",
                element: <Contacts />
            },
            {
                path: "accounts/",
                element: <Accounts />
            }
        ]
    },
]);

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
