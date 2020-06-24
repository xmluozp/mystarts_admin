import CONST from '_const'

/**
 * check multiple authes for React Route
 * @param {} authList 
 * @param {*} routeList 
 */
export const authFilterForRoutes = (user: any, routeList:any[] = []) => {

    const authSet = new Set(user && user.auth ? user.auth : [])

    for (let i = 0; i < routeList.length; i++) {  
        const route = routeList[i]
        // if doesn't pass
        routeList[i].block = route.auth && !authSet.has(CONST.AUTH_LIST.get(route.auth))
    }

    return routeList
  };


/**
 * check one auth (e.g. if displays a button)
 * @param {} authList 
 * @param {*} auth 
 */
export const authCheck = (authList = [], auth = "") => {
    // if no auth code, should be public
    if (!auth) return true;
    if(authList.length === 0) {return false}
  
    const auth_index: String = CONST.AUTH_LIST.get(auth)

    const set: Set<String> = new Set(authList)
  
    return set.has(auth_index);
  };