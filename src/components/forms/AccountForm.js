import { Form } from "react-router-dom"
import { addAccountUtil } from "../../util/forms/accountFormUtil"

/**
 * @file AccountForm.js
 * @author 0xChristopher
 * @brief This file is responsible for the Account Form component of the CRM website.
 */

/**
 * @brief The AccountForm() function builds the page account form component.
 * @return Returns the account form component to be added to the page
 */
function AccountForm(props)
{
    const {
        user
    } = props

    // Component functions stored in accountFormUtil
    const addAccount = () => addAccountUtil()

    return (
        <>
            {/* Page Mask (dimmed background) */}
            <div className="page-mask" id="page-mask" />
            {/* Account Form */}
            <section className="form-container" id="account-form--container">
                <div className="form">
                    <div className="form--header">
                        <div className="form--header-text">
                            New Account
                        </div>
                    </div>
                    <Form className="form--form">
                        {/* General info section */}
                        <div className="form--subheader">
                            Account Information
                        </div>
                        <div className="form--label">
                            Account Owner
                        </div>
                        <div className="form--text">
                            {user}
                        </div>
                        <div className="form--label">
                            <span className="required" title="required">*</span>
                            <span>Account Name</span>
                        </div>
                        <input
                            className="form--input-field account-form--input"
                            id="account-form--account-name"
                            required
                            type="text"
                        ></input>
                        <div className="form--label">
                            Website
                        </div>
                        <input
                            className="form--input-field account-form--input"
                            id="account-form--website" 
                            type="text"
                        ></input>
                        <div className="form--label">
                            Type
                        </div>
                        <input
                            className="form--input-field account-form--input"
                            id="account-form--type"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Description
                        </div>
                        <textarea
                            className="form--input-field account-form--input"
                            id="account-form--description"
                            rows={5}
                            type="text"
                        ></textarea>
                        <div className="form--label">
                            Parent Account
                        </div>
                        <input
                            className="form--input-field account-form--input"
                            id="account-form--parent-account"
                            type="text"
                        ></input>
                        {/* Account info section */}
                        <div className="form--subheader">
                            Get In Touch
                        </div>
                        <div className="form--label">
                            Phone
                        </div>
                        <input
                            className="form--input-field account-form--input"
                            id="account-form--phone"
                            type="text"
                        ></input>
                        <div className="form--subheader">
                            Billing Address
                        </div>
                        <div className="form--label">
                            Billing Street
                        </div>
                        <input
                            className="form--input-field account-form--input"
                            id="account-form--billing-street"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Billing City
                        </div>
                        <input
                            className="form--input-field account-form--input"
                            id="account-form--billing-city"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Billing State/Province
                        </div>
                        <input
                            className="form--input-field account-form--input"
                            id="account-form--billing-state-province"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Billing Zip/Postal Code
                        </div>
                        <input
                            className="form--input-field account-form--input"
                            id="account-form--billing-zip-postal"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Billing Country
                        </div>
                        <input
                            className="form--input-field account-form--input"
                            id="account-form--billing-country"
                            type="text"
                        ></input>
                        <div className="form--subheader">
                            Shipping Address
                        </div>
                        <div className="form--label">
                            Shipping Street
                        </div>
                        <input
                            className="form--input-field account-form--input"
                            id="account-form--shipping-street"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Shipping City
                        </div>
                        <input
                            className="form--input-field account-form--input"
                            id="account-form--shipping-city"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Shipping State/Province
                        </div>
                        <input
                            className="form--input-field account-form--input"
                            id="account-form--shipping-state-province"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Shipping Zip/Postal Code
                        </div>
                        <input
                            className="form--input-field account-form--input"
                            id="account-form--shipping-zip-postal"
                            type="text"
                        ></input>
                        <div className="form--label">
                            Shipping Country
                        </div>
                        <input
                            className="form--input-field account-form--input"
                            id="account-form--shipping-country"
                            type="text"
                        ></input>
                        <div className="form--footer-border" />
                        <div className="form--footer-container">
                            <div className="button--container">
                                <button 
                                    id="add-account--button"
                                    type="submit" 
                                    onClick={addAccount}>
                                    Add Account
                                </button>
                            </div>
                            <div className="button--container">
                                <button 
                                    className="secondary-button"
                                    type="button"
                                    id="form--cancel">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </section>
        </>
    )
}

export default AccountForm