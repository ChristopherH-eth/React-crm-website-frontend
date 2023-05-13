/**
 * @file Loading.js
 * @author 0xChristopher
 * @brief This file is responsible for the Loading component of the CRM website.
 */

/**
 * @brief The Loading() function builds the page loading component.
 * @return Returns the loading component to be added to the page
 */
function Loading()
{
    return (
        <section className="loading">
            <div className="loading-contaier">
                <div className="loading-block">
                    <img className="loading-image" src="images/icons/loadingIcon.png" alt="loading" />
                    <span className="loading-text">Loading...</span>
                </div>
            </div>
        </section>
    )
}

export default Loading