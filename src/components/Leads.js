import React from "react"
import { URLS, ENDPOINTS } from "../util/config"
import { showLeadFormUtil } from "../util/leadsUtil"

/**
 * @file Leads.js
 * @author 0xChristopher
 * @brief This file is responsible for the Leads component of the CRM website.
 */

/**
 * @brief The Leads() function builds the page leads component.
 * @return Returns the leads component to be added to the page
 */
function Leads()
{
    const [leadData, setLeadData] = React.useState([])

    // Leads API endpoint
    const leadUrl = `${URLS.api}${ENDPOINTS.leads}`

    // Component functions stored in leadsUtil
    const showLeadForm = () => showLeadFormUtil()

    React.useEffect(() => {
        fetch(leadUrl, {
            method: "GET",
            mode: "cors",
            // credentials: "include",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then((res) => res.json())
            .then((data) => setLeadData(data))
            .catch(console.error)
    }, [leadUrl])

    // Map lead data
    const leads = leadData.map((lead) => {
        return (
            <tr className="table-data--items" key={lead.id}>
                <td className="table-data--5p--borderless">
                    {lead.id}
                </td>
                <td className="table-data--2_5p--borderless">
                    <input
                        className="table-data--2_5p--borderless--input"
                        id="leads--lead-selector"
                        type="checkbox"
                    ></input>
                </td>
                <td className="table-data--7_5p--borderless">
                    {lead.first_name} {lead.last_name}
                </td>
                <td className="table-data--10p--borderless">
                    {lead.company}
                </td>
                <td className="table-data--10p--borderless">
                    {lead.state_province}
                </td>
                <td className="table-data--10p--borderless">
                    {lead.phone}
                </td>
                <td className="table-data--10p--borderless">
                    {lead.email}
                </td>
                <td className="table-data--10p--borderless">
                    
                </td>
                <td className="table-data--10p--borderless">
                    
                </td>
                <td className="table-data--10p--borderless">
                    
                </td>
                <td className="table-data--10p--borderless">
                    
                </td>
                <td className="table-data--5p--borderless">
                    <button>...</button>
                </td>
            </tr>
        )
    })

    return (
        <section className="leads">
            <div className="table-data--container">
                <div className="table-data--heading">
                    Leads
                </div>
                <table className="table-data--table">
                    <tbody>
                        <tr className="table-data--headers">
                            <td className="table-data--5p" />
                            <td className="table-data--2_5p" />
                            <td className="table-data--7_5p">
                                Name    
                            </td>
                            <td className="table-data--10p">
                                Company
                            </td>
                            <td className="table-data--10p">
                                State/Province
                            </td>
                            <td className="table-data--10p">
                                Phone
                            </td>
                            <td className="table-data--10p">
                                Email
                            </td>
                            <td className="table-data--10p">
                                Lead Status
                            </td>
                            <td className="table-data--10p">
                                Created Date
                            </td>
                            <td className="table-data--10p">
                                Last Activity Date
                            </td>
                            <td className="table-data--10p">
                                Lead Owner
                            </td>
                            <td className="table-data--5p-end" />
                        </tr>
                        {leads}
                    </tbody>
                </table>
                <div className="table-data--buttons">
                    <button onClick={showLeadForm}>New</button>
                </div>
            </div>
        </section>
    )
}

export default Leads