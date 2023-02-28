import { Link } from "react-router-dom"

/**
 * @file Main.js
 * @author 0xChristopher
 * @brief This file is responsible for the Main component of the CRM website.
 */

/**
 * @brief The Main() function builds the page main component.
 * @return Returns the main component to be added to the page
 */
function Main()
{
    return (
        <main className="main">
            <div className="main--container">
                <div className="main--get-started">
                    Get Started
                </div>
                <div className="main--quick-look">
                    Quick Look
                </div>
                <div className="main--quick-look--container">
                    <div className="main--quick-look--item--container">
                        <Link className="main--quick-look--item" to={"leads/"}>
                            <div className="main--quick-look--item--bar" />
                            <div>
                                <div className="main--quick-look--item--header">
                                    Leads
                                </div>
                                <div className="main--quick-look--item--caption">
                                    Leads are your prospects before they become deals and customers.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="main--quick-look--item--container">
                        <Link className="main--quick-look--item" to={"contacts/"}>
                            <div className="main--quick-look--item--bar" />
                            <div>
                                <div className="main--quick-look--item--header">
                                    Contacts
                                </div>
                                <div className="main--quick-look--item--caption">
                                    Contacts are anyone you meet, sell to, or work with.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="main--quick-look--item--container">
                        <Link className="main--quick-look--item" to={"/"}>
                            <div className="main--quick-look--item--bar" />
                            <div>
                                <div className="main--quick-look--item--header">
                                    Opportunities
                                </div>
                                <div className="main--quick-look--item--caption">
                                    This is your pipeline. Track stages are your deals move forward.
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main