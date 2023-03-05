/**
 * @file config.js
 * @author 0xChristopher
 * @brief This file handles variables that regularly occur throughout the website.
 */

// Production and development urls
let URLS = {}

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development")
{
    URLS = {
        api: "http://localhost:8000/api/v1"
    }
}
else
{
    URLS = {
        api: "http://localhost/api/v1"
    }
}

const ENDPOINTS = {
    contacts: "/contacts/",
    accounts: "/accounts/",
    leads: "/leads/",
    login: "/users/login/"
}

export { URLS, ENDPOINTS }