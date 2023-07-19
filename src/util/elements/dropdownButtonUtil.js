import { URLS, ENDPOINTS } from "../config"
import { showFormUtil } from "../collectionsUtil"

/**
 * @file dropdownButtonUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in DropdownButton component manipulation.
 */

/**
 * @brief The editEntryUtil() function prepares an object entry form with the current objects available
 *      information to be edited.
 * @param type Data type to interact with
 * @param entryId Object id
 * @param setIsLoggedIn State function for isLoggedIn variable
 * @param navigate useNavigate hook to redirect browser
 * @param setIsNew State function for isNew variable
 */
function editEntryUtil(type, entryId, setIsLoggedIn, navigate, setIsNew)
{
    const editFormFlag = false                                              // Flag to set the value of isNew form status
    const entryUrl = `${URLS.api}${ENDPOINTS[type]}/${entryId}`             // Entry API endpoint

    // Request the entry
    fetch(entryUrl,  {
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
            {
                showFormUtil(type)
                setIsNew(editFormFlag)
            }
        })
}

/**
 * @brief The deleteEntryUtil() function attempts to delete an object of a given type based on its id.
 * @param type Data type to interact with
 * @param entryId Object id
 * @param setIsLoggedIn State function for isLoggedIn variable
 * @param navigate useNavigate hook to redirect browser
 * @param pageUrl Page fetch url
 * @param setCollectionData State function for collectionData variable
 * @param setIsLoading State function for isLoading variable
 */
async function deleteEntryUtil(
    type, 
    entryId, 
    setIsLoggedIn, 
    navigate, 
    pageUrl, 
    setCollectionData, 
    setIsLoading)
{
    const deleteUrl = `${URLS.api}${ENDPOINTS[type]}/${entryId}`        // Delete Entry API endpoint

    await setIsLoading(true)

    // Request entry be deleted
    await fetch(deleteUrl, {
        method: "DELETE",
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
        })
        .catch(console.error)

    // Request updated collection
    await fetch(pageUrl, {
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
            {
                setCollectionData(data.body[type])
                setIsLoading(false)
            }
        })
        .catch(console.error)
}

/**
 * @brief The changeOwnerUtil() function allows for the assignment of the current object to another user.
 * @param type Data type to interact with
 * @param entryId Object id
 */
function changeOwnerUtil(type, entryId)
{
    const url = `${URLS.api}${ENDPOINTS[type]}/${entryId}`

    console.log("Change Owner " + url)
}

/**
 * @brief The handleInputClickUtil() function hides the dropdown menu when the dropdown input itself or
 *      an option is selected.
 * @param showMenu True if the dropdown menu is being shown
 * @param setShowMenu State function for setting wether to show the dropdown menu
 */
function handleInputClickUtil(showMenu, setShowMenu)
{
    setShowMenu(!showMenu)
}

export { editEntryUtil, deleteEntryUtil, changeOwnerUtil, handleInputClickUtil }