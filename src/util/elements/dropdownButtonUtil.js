import { URLS, ENDPOINTS } from "../config"

/**
 * @file dropdownButtonUtil.js
 * @author 0xChristopher
 * @brief This file contains functions used in DropdownButton component manipulation.
 */

const url = `${URLS.api}${ENDPOINTS}`

/**
 * @brief 
 * @param type 
 * @param entryId 
 */
function editEntryUtil(type, entryId)
{
    console.log("Edit " + type + " " + entryId)
}

/**
 * @brief
 * @param type 
 * @param entryId 
 */
function deleteEntryUtil(type, entryId)
{
    console.log("Delete " + type + " " + entryId)
}

/**
 * @brief
 * @param type 
 * @param entryId 
 */
function changeOwnerUtil(type, entryId)
{
    console.log("Change Owner " + type + " " + entryId)
}

export { editEntryUtil, deleteEntryUtil, changeOwnerUtil }