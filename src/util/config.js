/**
 * @file config.js
 * @author 0xChristopher
 * @brief This file handles variables that regularly occur throughout the website.
 */

// Web Application and API base URLs
const URLS = {
    base: "http://localhost:3000",
    api: "http://localhost:8000/api/v1"
}

// URL paths
const PATHS = {
    login: "/login/"
}

// API endpoints
const ENDPOINTS = {
    contacts: "/contacts",
    contactsPage: "/contacts/page",
    contactsQuicklook: "/contacts/quicklook",
    accounts: "/accounts",
    accountsPage: "/accounts/page",
    accountsQuicklook: "/accounts/quicklook",
    leads: "/leads",
    leadsPage: "/leads/page",
    leadsQuicklook: "/leads/quicklook",
    opportunities: "/opportunities",
    opportunitiesPage: "/opportunities/page",
    opportunitiesQuicklook: "/opportunities/quicklook",
    jwtRefresh: "/users/refresh",
    login: "/users/login",
    logout: "/users/logout",
    register: "/users/register",
    user: "/users",
    tableView: "/tableview",
    actionBar: "/actionbar",
    layout: "/layout"
}

module.exports = { URLS, PATHS, ENDPOINTS }