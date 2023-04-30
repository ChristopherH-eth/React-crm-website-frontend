import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Footer from "./Footer"
import DropdownButton from "./elements/DropdownButton"
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
function Accounts(props)
{
    const {
        setIsLoggedIn
    } = props

    const [accountData, setAccountData] = React.useState([])

    const navigate = useNavigate()

    // Accounts API endpoint
    const accountUrl = `${URLS.api}${ENDPOINTS.accounts}`

    // Options array for account entry dropdown button
    const options = [
        {value: "edit", label: "Edit"},
        {value: "delete", label: "Delete"},
        {value: "change_owner", label: "Change Owner"}
    ]

    // Component functions stored in accountsUtil
    const showAccountForm = () => showAccountFormUtil()

    React.useEffect(() => {
        fetch(accountUrl, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then((res) => res.json().then((data) => ({status: res.status, body: data})))
            .then((data) => {
                if (data.status === 401)
                {
                    setIsLoggedIn(false)
                    navigate("/login")
                }
                else
                    setAccountData(data.body)
            })
            .catch(console.error)
    }, [accountUrl, navigate, setIsLoggedIn])

    // Map contact data
    const accounts = accountData.map((account) => {
        return (
            <tr className="table-data--items" key={account.id}>
                <td className="table-data--borderless--centered table-data--5p">
                    <span className="table-data--content">
                        <Link className="link" to={`${account.id}`}>{account.id}</Link>
                    </span>
                </td>
                <td className="table-data--borderless--centered table-data--2_5p">
                    <input
                        className="table-data--input"
                        id="accounts--account-selector"
                        type="checkbox"
                    ></input>
                </td>
                <td className="table-data--borderless table-data--19_5p">
                    <span className="table-data--content">
                        {account.account_name}
                    </span>
                </td>
                <td className="table-data--borderless table-data--17p">
                    <span className="table-data--content">
                        {account.account_id}
                    </span>
                </td>
                <td className="table-data--borderless table-data--17p">
                    <span className="table-data--content">
                        {account.title}
                    </span>
                </td>
                <td className="table-data--borderless table-data--17p">
                    <span className="table-data--content">
                        {account.phone}
                    </span>
                </td>
                <td className="table-data--borderless table-data--17p">
                    <span className="table-data--content">
                        {account.account_owner}
                    </span>
                </td>
                <td className="table-data--borderless--centered table-data--5p">
                    <DropdownButton 
                        placeholder={""} 
                        options={options} 
                    />
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
                    <tbody>
                        <tr className="table-data--headers">
                            <td className="table-data--end table-data--5p" />
                            <td className="table-data--end table-data--2_5p" />
                            <td className="table-data table-data--19_5p">
                                <span className="table-data--content">
                                    Name
                                </span>
                            </td>
                            <td className="table-data table-data--17p">
                                <span className="table-data--content">
                                    Account Name
                                </span>
                            </td>
                            <td className="table-data table-data--17p">
                                <span className="table-data--content">
                                    Title
                                </span>
                            </td>
                            <td className="table-data table-data--17p">
                                <span className="table-data--content">
                                    Phone
                                </span>
                            </td>
                            <td className="table-data table-data--17p">
                                <span className="table-data--content">
                                    Account Owner
                                </span>
                            </td>
                            <td className="table-data--end table-data--5p" />
                        </tr>
                        {accounts}
                    </tbody>
                </table>
                <div className="table-data--buttons">
                    <button onClick={showAccountForm}>New</button>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Accounts