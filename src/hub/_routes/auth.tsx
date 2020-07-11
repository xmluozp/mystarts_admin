import CONST from '_const'

/**
 * check multiple authes for React Route
 * @param {} authList 
 * @param {*} routeList 
 */
export const authFilterForRoutes = (user: any, routeList: any[] = []) => {

  // const authSet = new Set(user && user.auth ? user.auth : [])

  // for (let i = 0; i < routeList.length; i++) {  
  //     const route = routeList[i]
  //     // if doesn't pass
  //     routeList[i].block = route.auth && !authSet.has(CONST.AUTH_LIST.get(route.auth))
  // }

  // return routeList

  // string array of rules
  const authSet = new Set(user && user.auth ? user.auth : [])

  for (let i = 0; i < routeList.length; i++) {
    const route = routeList[i]
    // 
    routeList[i].block = route.auth && !authSet.has(route.auth)
  }

  return routeList
};

export const navsFilterForRoutes = (user: any, navList: any[] = []) => {

  const authSet = new Set(user && user.auth ? user.auth : [])

  const returnList: Array<any> = []

  for (let i = 0; i < navList.length; i++) {

    const nav = navList[i]
    // 
    if (!nav.auth || authSet.has(nav.auth)) {
      returnList.push(nav)
    }
  }

  return returnList
}



/**
 * check one auth (e.g. if displays a button)
 * @param {} authList 
 * @param {*} auth 
 */
export const authCheck = (authList = [], auth = "") => {
  // if no auth code, should be public
  if (!auth) return true;
  if (authList.length === 0) { return false }

  const auth_index: String = CONST.AUTH_LIST.get(auth)

  const set: Set<String> = new Set(authList)

  return set.has(auth_index);
};