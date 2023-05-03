import { Link } from "react-router-dom"

/**
 * @file QuickLook.js
 * @author 0xChristopher
 * @brief This file is responsible for the QuickLook component of the CRM website.
 */

/**
 * @brief The QuickLook() function builds the page quicklook component.
 * @return Returns the quicklook component to be added to the page
 */
function QuickLook()
{
    return (
        <>
            <div className="main--quick-look">
                Quick Look
            </div>
            {/* Quick Look First Row */}
            <div className="main--quick-look--container">
                {/* Quick Look Item */}
                <div className="main--quick-look--item--container">
                    <Link className="main--quick-look--item" to={"leads/page/"}>
                        <div className="main--quick-look--icon--container">
                            <img 
                                className="quick-look--icon" 
                                src="images/icons/leadicon.png" 
                                alt="quick look leads icon"
                            />
                        </div>
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
                {/* Quick Look Item */}
                <div className="main--quick-look--item--container">
                    <Link className="main--quick-look--item" to={"contacts/page/"}>
                        <div className="main--quick-look--icon--container">
                            <img 
                                className="quick-look--icon" 
                                src="images/icons/contacticon.png" 
                                alt="quick look leads icon"
                            />
                        </div>
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
                {/* Quick Look Item */}
                <div className="main--quick-look--item--container">
                    <Link className="main--quick-look--item" to={"/"}>
                        <div className="main--quick-look--icon--container">
                            <img 
                                className="quick-look--icon" 
                                src="images/icons/opportunityicon.png" 
                                alt="quick look leads icon"
                            />
                        </div>
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
            {/* Quick Look Second Row */}
            <div className="main--quick-look--container">
                {/* Quick Look Item */}
                <div className="main--quick-look--item--container">
                    <Link className="main--quick-look--item" to={"/"}>
                        <div className="main--quick-look--item--bar" />
                        <div>
                            <div className="main--quick-look--item--header">
                                Test
                            </div>
                            <div className="main--quick-look--item--caption">
                                Test------------------------------------
                            </div>
                        </div>
                    </Link>
                </div>
                {/* Quick Look Item */}
                <div className="main--quick-look--item--container">
                    <Link className="main--quick-look--item" to={"/"}>
                        <div className="main--quick-look--item--bar" />
                        <div>
                            <div className="main--quick-look--item--header">
                                Test
                            </div>
                            <div className="main--quick-look--item--caption">
                                Test------------------------------------
                            </div>
                        </div>
                    </Link>
                </div>
                {/* Quick Look Item */}
                <div className="main--quick-look--item--container">
                    <Link className="main--quick-look--item" to={"/"}>
                        <div className="main--quick-look--item--bar" />
                        <div>
                            <div className="main--quick-look--item--header">
                                Test
                            </div>
                            <div className="main--quick-look--item--caption">
                                Test------------------------------------
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default QuickLook