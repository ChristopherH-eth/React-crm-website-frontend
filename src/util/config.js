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
        base: "http://localhost:3000",
        api: "http://localhost:8000/api/v1"
    }
}
else
{
    URLS = {
        base: "http://localhost",
        api: "http://localhost/api/v1"
    }
}

const PATHS = {
    login: "/login/"
}

const ENDPOINTS = {
    contacts: "/contacts/",
    accounts: "/accounts/",
    leads: "/leads/",
    jwtRefresh: "/users/refresh/",
    login: "/users/login/",
    logout: "/users/logout/",
    register: "/users/register/",
    user: "/users/"
}

export { URLS, PATHS, ENDPOINTS }