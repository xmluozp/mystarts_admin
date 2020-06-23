
/** ==========================================================================
 * THIS PAGE: basic constants will be used on website
 */

// ************************************************** auth, roles (
    const ROLES = {
        GUEST: 0,
        ENTREPRENEUR: 1,
        INVESTOR: 2,
        ADMIN: 3
    }
    
    // reverse auth key-value. make it easier to search index from the auth code
    const tmpAuthList = [
        "guestpages",
        "dashboard",
        "project_list",
        "investor_list"
    ]
    const AUTH_LIST = new Map()
    for (let i = 0; i < tmpAuthList.length; i++) {
        AUTH_LIST.set(tmpAuthList[i], i)    
    }
    // ************************************************** )
    
    
    const CONST = {
        ROLES,
        AUTH_LIST
    }
    
    
    export default CONST