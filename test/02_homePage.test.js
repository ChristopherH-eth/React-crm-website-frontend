const { expect } = require("chai")

/**
 * @file 02_homePage.test.js
 * @author 0xChristopher
 * @brief The HomePage class is responsible for the functions used in the HomePage unit tests for the
 *      CRM Test Suite.
 */

class HomePage
{
    constructor(driver, baseUrl)
    {
        this.driver = driver
        this.baseUrl = baseUrl
    }
}

module.exports = HomePage