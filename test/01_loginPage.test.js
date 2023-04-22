const { expect } = require("chai")
const { By } = require("selenium-webdriver")
const { PATHS } = require("../src/util/config")
require("dotenv").config()

/**
 * @file 01_loginPage.test.js
 * @author 0xChristopher
 * @brief The LoginPage class is responsible for the functions used in the LoginPage unit tests for the
 *      CRM Test Suite.
 */

class LoginPage 
{
    constructor(driver, timeout, baseUrl, loginUrl)
    {
        this.driver = driver
        this.timeout = timeout
        this.baseUrl = baseUrl
        this.loginUrl = loginUrl
        this.title = "CRM Website"
        this.username = process.env.REACT_APP_USERNAME
        this.password = process.env.REACT_APP_PASSWORD
        this.usernameId = By.id("login-form--email")
        this.passwordId = By.id("login-form--password")
        this.loginButton = By.id("login-form--login-button")
    }

    /**
     * @brief The navigateToLoginPage() function navigates to the login page and checks the title and url
     *      for accuracy.
     */
    async navigateToLoginPage() 
    {
        // Navigate to login page
        await this.driver.get(this.loginUrl)
            .then(() => new Promise(resolve => setTimeout(resolve, this.timeout)))

        // Get web page title and url
        const title = await this.driver.getTitle()
        const currentUrl = await this.driver.getCurrentUrl()

        expect(title).to.equal(this.title)
        expect(currentUrl).to.equal(this.loginUrl)
    }

    /**
     * @brief The loginToCrm() function attempts to login to the CRM system.
     */
    async loginToCrm()
    {
        // Login field locators
        const usernameInput = await this.driver.findElement(this.usernameId)
        const passwordInput = await this.driver.findElement(this.passwordId)

        // Enter credentials and attempt login
        await usernameInput.sendKeys(this.username)
        await passwordInput.sendKeys(this.password)
        await this.driver.findElement(this.loginButton).click()
            .then(() => new Promise(resolve => setTimeout(resolve, this.timeout)))

        // Wait for next page to load
        const currentUrl = await this.driver.getCurrentUrl()

        expect(currentUrl).to.equal(this.baseUrl)
    }
}

module.exports = LoginPage 