import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Footer from "./Footer"
import DropdownButton from "./elements/DropdownButton"
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
function Leads(props)
{
    const {
        setIsLoggedIn
    } = props

    const [leadData, setLeadData] = React.useState([])

    const navigate = useNavigate()

    // Leads API endpoint
    const leadUrl = `${URLS.api}${ENDPOINTS.leads}`

    // Options array for account entry dropdown button
    const options = [
        {value: "edit", label: "Edit"},
        {value: "delete", label: "Delete"},
        {value: "change_owner", label: "Change Owner"}
    ]

    // Component functions stored in leadsUtil
    const showLeadForm = () => showLeadFormUtil()

    React.useEffect(() => {
        fetch(leadUrl, {
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
                    setLeadData(data.body)
            })
            .catch(console.error)
    }, [leadUrl, navigate, setIsLoggedIn])

    // Map lead data
    const leads = leadData.map((lead) => {
        return (
            <tr className="table-data--items" key={lead.id}>
                <td className="table-data--borderless--centered table-data--5p">
                    <span className="table-data--content">
                        <Link className="link" to={`${lead.id}`}>{lead.id}</Link>
                    </span>
                </td>
                <td className="table-data--borderless--centered table-data--2_5p">
                    <input
                        className="table-data--input"
                        id="leads--lead-selector"
                        type="checkbox"
                    ></input>
                </td>
                <td className="table-data--borderless table-data--7_5p">
                    <span className="table-data--content">
                        {lead.first_name} {lead.last_name}
                    </span>
                </td>
                <td className="table-data--borderless table-data--10p">
                    <span className="table-data--content">
                        {lead.company}
                    </span>
                </td>
                <td className="table-data--borderless table-data--10p">
                    <span className="table-data--content">
                        {lead.state_province}
                    </span>
                </td>
                <td className="table-data--borderless table-data--10p">
                    <span className="table-data--content">
                        {lead.phone}
                    </span>
                </td>
                <td className="table-data--borderless table-data--10p">
                    <span className="table-data--content">
                        {lead.email}
                    </span>
                </td>
                <td className="table-data--borderless table-data--10p">
                    <span className="table-data--content">

                    </span>
                </td>
                <td className="table-data--borderless table-data--10p">
                    <span className="table-data--content">

                    </span>
                </td>
                <td className="table-data--borderless table-data--10p">
                    <span className="table-data--content">

                    </span>
                </td>
                <td className="table-data--borderless table-data--10p">
                    <span className="table-data--content">

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
        <section className="leads">
            <div className="table-data--container">
                <div className="table-data--heading">
                    Leads
                </div>
                <table className="table-data--table">
                    <tbody>
                        <tr className="table-data--headers">
                            <td className="table-data--end table-data--5p" />
                            <td className="table-data--end table-data--2_5p" />
                            <td className="table-data table-data--7_5p">
                                <span className="table-data--content">
                                    Name 
                                </span>   
                            </td>
                            <td className="table-data table-data--10p">
                                <span className="table-data--content">
                                    Company
                                </span>
                            </td>
                            <td className="table-data table-data--10p">
                                <span className="table-data--content">
                                    State/Province
                                </span>
                            </td>
                            <td className="table-data table-data--10p">
                                <span className="table-data--content">
                                    Phone
                                </span>
                            </td>
                            <td className="table-data table-data--10p">
                                <span className="table-data--content">
                                    Email
                                </span>
                            </td>
                            <td className="table-data table-data--10p">
                                <span className="table-data--content">
                                    Lead Status
                                </span>
                            </td>
                            <td className="table-data table-data--10p">
                                <span className="table-data--content">
                                    Created Date
                                </span>
                            </td>
                            <td className="table-data table-data--10p">
                                <span className="table-data--content">
                                    Last Activity Date
                                </span>
                            </td>
                            <td className="table-data table-data--10p">
                                <span className="table-data--content">
                                    Lead Owner
                                </span>
                            </td>
                            <td className="table-data--end table-data--5p" />
                        </tr>
                        {leads}
                    </tbody>
                </table>
                <div className="table-data--buttons">
                    <button onClick={showLeadForm}>New</button>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Leads