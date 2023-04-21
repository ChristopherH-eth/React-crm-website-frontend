require('dotenv').config()

/**
 * @file config.js
 * @author 0xChristopher
 * @brief This file handles variables that regularly occur throughout the website.
 */

// Production and development urls
let URLS = {}

// Set base and API URLs based on current environment
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

// URL paths
const PATHS = {
    login: "/login/"
}

// API endpoints
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

// Test user credentials
const TESTUSER = {
    username: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD
}

//export { URLS, PATHS, ENDPOINTS, TESTUSER }
module.exports = { URLS, PATHS, ENDPOINTS, TESTUSER }