/**
 * @file Loading.js
 * @author 0xChristopher
 * @brief This file is responsible for the Loading component of the CRM website.
 */

function Loading()
{
    return (
        <section className="loading">
            <div className="loading-contaier">
                <div className="loading-block">
                    <img className="loading-image" src="images/icons/loadingicon.png" alt="loading" />
                    <span className="loading-text">Loading...</span>
                </div>
            </div>
        </section>
    )
}

export default Loading