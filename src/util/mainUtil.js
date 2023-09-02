import { Link } from "react-router-dom"

/**
 * @file mainUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in the Main component.
 * 
 * @dev These functions could be condensed into one function to handle various data types, however, they
 *      are currently seperate in anticipation of unique attributes. This may change.
 */

/**
 * @brief The mapLeads() function maps an incoming data array for display.
 * @param leadsData Array of leads data
 * @return Returns JSX of the mapped array
 */
function mapLeads(leadsData)
{
    // Map leads data
    const leads = leadsData.map((lead => {
        return (
            <tr className="table-items" key={lead.id}>
                <td className="table-cell-borderless table-cell-2_5p">
                    <span className="table-cell-content">
                        <Link className="link" to={`leads/${lead.id}`}>{lead.id}</Link>
                    </span>
                </td>
                <td className="table-cell-borderless table-cell-fill">
                    <span className="table-cell-content">
                        {lead.first_name}
                    </span>
                </td>
            </tr>
        )
    }))

    return leads
}

/**
 * @brief The mapOpps() function maps an incoming data array for display.
 * @param oppsData Array of opportunities data
 * @return Returns JSX of the mapped array
 */
function mapOpps(oppsData)
{
    // Map opportunities data
    const opps = oppsData.map((opp => {
        return (
            <tr className="table-items" key={opp.id}>
                <td className="table-cell-borderless table-cell-2_5p">
                    <span className="table-cell-content">
                        <Link className="link" to={`opportunities/${opp.id}`}>{opp.id}</Link>
                    </span>
                </td>
                <td className="table-cell-borderless table-cell-fill">
                    <span className="table-cell-content">
                        {opp.opportunity_name}
                    </span>
                </td>
            </tr>
        )
    }))

    return opps
}

/**
 * @brief The mapContacts() function maps an incoming data array for display.
 * @param contactsData Array of contacts data
 * @return Returns JSX of the mapped array
 */
function mapContacts(contactsData)
{
    // Map contacts data
    const contacts = contactsData.map((contact => {
        return (
            <tr className="table-items" key={contact.id}>
                <td className="table-cell-borderless table-cell-2_5p">
                    <span className="table-cell-content">
                        <Link className="link" to={`contacts/${contact.id}`}>{contact.id}</Link>
                    </span>
                </td>
                <td className="table-cell-borderless table-cell-fill">
                    <span className="table-cell-content">
                        {contact.first_name}
                    </span>
                </td>
            </tr>
        )
    }))

    return contacts
}

/**
 * @brief The mapAccounts() function maps an incoming data array for display.
 * @param accountsData Array of leads data
 * @return Returns JSX of the mapped array
 */
function mapAccounts(accountsData)
{
    // Map accounts data
    const accounts = accountsData.map((account => {
        return (
            <tr className="table-items" key={account.id}>
                <td className="table-cell-borderless table-cell-2_5p">
                    <span className="table-cell-content">
                        <Link className="link" to={`accounts/${account.id}`}>{account.id}</Link>
                    </span>
                </td>
                <td className="table-cell-borderless table-cell-fill">
                    <span className="table-cell-content">
                        {account.account_name}
                    </span>
                </td>
            </tr>
        )
    }))

    return accounts
}

export { mapLeads, mapOpps, mapContacts, mapAccounts }