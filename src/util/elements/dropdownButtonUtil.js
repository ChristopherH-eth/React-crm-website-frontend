import { URLS, ENDPOINTS } from "../config"

/**
 * @file dropdownButtonUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in DropdownButton component manipulation.
 */

/**
 * @brief 
 * @param type Data type to interact with
 * @param entryId Object id
 */
function editEntryUtil(type, entryId)
{
    const url = `${URLS.api}${ENDPOINTS[type]}${entryId}`

    console.log("Edit " + url)
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
    const deleteUrl = `${URLS.api}${ENDPOINTS[type]}${entryId}`         // Delete Entry API endpoint

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
 * @brief
 * @param type Data type to interact with
 * @param entryId Object id
 */
function changeOwnerUtil(type, entryId)
{
    const url = `${URLS.api}${ENDPOINTS[type]}${entryId}`

    console.log("Change Owner " + url)
}

export { editEntryUtil, deleteEntryUtil, changeOwnerUtil }