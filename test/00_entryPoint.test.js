const webdriver = require("selenium-webdriver")
const chrome = require("selenium-webdriver/chrome")
const LoginPage = require("./01_loginPage.test")
const HomePage = require("./02_homePage.test")

/**
 * @file 00_entryPoint.test.js
 * @author 0xChristopher
 * @brief 
 */

// Set options for chrome web driver
const options = new chrome.Options()
options.addArguments("--headless")

describe("CRM Test Suite - Unit Testing", () => {
    const baseUrl = "http://localhost:3000"
    let driver, loginPage, homePage

    // Build web driver and instantiate page classes
    before(async () => {
        driver = new webdriver.Builder()
            .forBrowser("chrome")
            .setChromeOptions(options)
            .build()
        
        loginPage = new LoginPage(driver, baseUrl)
        homePage = new HomePage(driver, baseUrl)
    })

    after(async () => {
        await driver.quit()
    })

    // Test the login page
    describe("Login Page", () => {
        it("Should find the correct webpage title and login url", async () => {
            await loginPage.navigateToLoginPage()
        })

        it("Should log in to the CRM system", async () => {
            await loginPage.loginToCrm()
        })
    })

    // Test the home page
    describe("Home Page", () => {

    })
})