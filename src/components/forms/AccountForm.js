import React from "react"
import { addAccountUtil } from "../../util/forms/accountFormUtil"
import { destroyFormUtil } from "../../util/util"

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
        user,                                               // Current user
        isNew                                               // True if the form is for a new account
    } = props

    // Component functions stored in accountFormUtil
    const addAccount = () => addAccountUtil()

    // Component functions stored in util
    const destroyForm = () => destroyFormUtil(accountFormInputClass, accountFormRef)

    const accountFormInputClass = "account-form--input"     // Form input fields class
    const accountFormRef = React.useRef(null)               // Reference to the Account Form

    return (
        <div>
            {/* Page Mask (dimmed background) */}
            <div className="page-mask" id="page-mask" />
            {/* Account Form */}
            <section className="form-container" id="accounts-form--container">
                <div className="form" ref={accountFormRef}>
                    <div className="form-header">
                        <div className="form-header-text">
                            {isNew
                                ? 
                                    "New Account"
                                : 
                                    "Edit Account"
                            }
                        </div>
                    </div>
                    <form>
                        {/* General info section */}
                        <div className="subheader">
                            Account Information
                        </div>
                        <div className="label">
                            Account Owner
                        </div>
                        <div className="form-text">
                            {user.full_name}
                        </div>
                        <div className="label">
                            <span className="required" title="required">*</span>
                            <span>Account Name</span>
                        </div>
                        <input
                            className="input-field account-form--input"
                            id="account-account-name"
                            required
                            type="text"
                        ></input>
                        <div className="label">
                            Website
                        </div>
                        <input
                            className="input-field account-form--input"
                            id="account-form--website" 
                            type="text"
                        ></input>
                        <div className="label">
                            Type
                        </div>
                        <input
                            className="input-field account-form--input"
                            id="account-form--type"
                            type="text"
                        ></input>
                        <div className="label">
                            Description
                        </div>
                        <textarea
                            className="input-field account-form--input"
                            id="account-form--description"
                            rows={5}
                            type="text"
                        ></textarea>
                        <div className="label">
                            Parent Account
                        </div>
                        <input
                            className="input-field account-form--input"
                            id="account-form--parent-account"
                            type="text"
                        ></input>
                        {/* Account info section */}
                        <div className="subheader">
                            Get In Touch
                        </div>
                        <div className="label">
                            Phone
                        </div>
                        <input
                            className="input-field account-form--input"
                            id="account-form--phone"
                            type="text"
                        ></input>
                        <div className="subheader">
                            Billing Address
                        </div>
                        <div className="label">
                            Billing Street
                        </div>
                        <input
                            className="input-field account-form--input"
                            id="account-form--billing-street"
                            type="text"
                        ></input>
                        <div className="label">
                            Billing City
                        </div>
                        <input
                            className="input-field account-form--input"
                            id="account-form--billing-city"
                            type="text"
                        ></input>
                        <div className="label">
                            Billing State/Province
                        </div>
                        <input
                            className="input-field account-form--input"
                            id="account-form--billing-state-province"
                            type="text"
                        ></input>
                        <div className="label">
                            Billing Zip/Postal Code
                        </div>
                        <input
                            className="input-field account-form--input"
                            id="account-form--billing-zip-postal"
                            type="text"
                        ></input>
                        <div className="label">
                            Billing Country
                        </div>
                        <input
                            className="input-field account-form--input"
                            id="account-form--billing-country"
                            type="text"
                        ></input>
                        <div className="subheader">
                            Shipping Address
                        </div>
                        <div className="label">
                            Shipping Street
                        </div>
                        <input
                            className="input-field account-form--input"
                            id="account-form--shipping-street"
                            type="text"
                        ></input>
                        <div className="label">
                            Shipping City
                        </div>
                        <input
                            className="input-field account-form--input"
                            id="account-form--shipping-city"
                            type="text"
                        ></input>
                        <div className="label">
                            Shipping State/Province
                        </div>
                        <input
                            className="input-field account-form--input"
                            id="account-form--shipping-state-province"
                            type="text"
                        ></input>
                        <div className="label">
                            Shipping Zip/Postal Code
                        </div>
                        <input
                            className="input-field account-form--input"
                            id="account-form--shipping-zip-postal"
                            type="text"
                        ></input>
                        <div className="label">
                            Shipping Country
                        </div>
                        <input
                            className="input-field account-form--input"
                            id="account-form--shipping-country"
                            type="text"
                        ></input>
                        <div className="footer-border" />
                        <div className="footer-container">
                            <div className="button--container">
                                <button 
                                    id="add-account--button"
                                    type="button" 
                                    onClick={addAccount}
                                >
                                    Add Account
                                </button>
                                <button 
                                    className="secondary-button"
                                    type="button"
                                    id="form--cancel"
                                    onClick={destroyForm}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AccountForm