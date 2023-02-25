import React from "react"
import { URLS, ENDPOINTS } from "../util/config"
import { showAccountFormUtil } from "../util/accountsUtil"

/**
 * @file Accounts.js
 * @author 0xChristopher
 * @brief This file is responsible for the Accounts component of the CRM website.
 */

/**
 * @brief The Accounts() function builds the page accounts component.
 * @return Returns the accounts component to be added to the page
 */
function Accounts()
{
    const [accountData, setAccountData] = React.useState([])

    // Accounts API endpoint
    const accountUrl = `${URLS.api}${ENDPOINTS.accounts}`

    // Component functions stored in accountsUtil
    const showAccountForm = () => showAccountFormUtil()

    React.useEffect(() => {
        fetch(accountUrl, {
            method: "GET",
            mode: "cors",
            // credentials: "include",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then((res) => res.json())
            .then((data) => setAccountData(data))
            .catch(console.error)
    }, [accountUrl])

    // Map contact data
    const accounts = accountData.map((account) => {
        return (
            <tr className="table-data--items" key={account.id}>
                <td className="table-data--id--borderless">
                    {account.id}
                </td>
                <td className="table-data--select--borderless">
                    <input
                        className="table-data--select--borderless--input"
                        id="accounts--account-selector"
                        type="checkbox"
                    ></input>
                </td>
                <td className="table-data--name--borderless">
                    {account.first_name} {account.last_name}
                </td>
                <td className="table-data--account-name--borderless">
                    {account.account_id}
                </td>
                <td className="table-data--title--borderless">
                    {account.title}
                </td>
                <td className="table-data--phone--borderless">
                    {account.phone}
                </td>
                <td className="table-data--owner--borderless">
                    
                </td>
                <td className="table-data--options--borderless">
                    <button>...</button>
                </td>
            </tr>
        )
    })

    return (
        <section className="accounts">
            <div className="table-data--container">
                <div className="table-data--heading">
                    Accounts
                </div>
                <table className="table-data--table">
                    <tr className="table-data--headers">
                        <td className="table-data--id" />
                        <td className="table-data--select" />
                        <td className="table-data--name">
                            Name    
                        </td>
                        <td className="table-data--account-name">
                            Account Name
                        </td>
                        <td className="table-data--title">
                            Title
                        </td>
                        <td className="table-data--phone">
                            Phone
                        </td>
                        <td className="table-data--owner">
                            Account Owner
                        </td>
                        <td className="table-data--options" />
                    </tr>
                    {accounts}
                </table>
                <div className="table-data--buttons">
                    <button onClick={showAccountForm}>New</button>
                </div>
            </div>
        </section>
    )
}

export default Accounts