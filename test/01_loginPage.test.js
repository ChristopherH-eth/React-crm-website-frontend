const { expect } = require("chai")
const { By } = require("selenium-webdriver")
const { PATHS, TESTUSER } = require("../src/util/config")

/**
 * @file 01_loginPage.test.js
 * @author 0xChristopher
 * @brief The LoginPage class is responsible for the functions used in the LoginPage unit tests for the
 *      CRM Test Suite.
 */

class LoginPage 
{
    constructor(driver, baseUrl)
    {
        this.driver = driver
        this.baseUrl = baseUrl
        this.title = "CRM Website"
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
        const loginUrl = `${this.baseUrl}${PATHS.login}`
        await this.driver.get(loginUrl)

        // Get web page title and url
        const title = await this.driver.getTitle()
        const currentUrl = await this.driver.getCurrentUrl()

        expect(title).to.equal(this.title)
        expect(currentUrl).to.equal(loginUrl)
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
        await usernameInput.sendKeys(TESTUSER.username)
        await passwordInput.sendKeys(TESTUSER.password)
        await this.driver.findElement(this.loginButton).click()
    }
}

module.exports = LoginPage 