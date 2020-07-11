
/** ==========================================================================
 * THIS PAGE: auth list
 */

// ************************************************** auth, roles (

// reverse auth key-value. make it easier to search index from the auth code
const tmpAuthList = [
    "guestpages",
    "dashboard",
    "project_list",
    "investor_list"
]

const guest = ["guestpages"]
const normaluser = [...guest, "dashboard"]
const mentor = [...normaluser]
const admin = [...mentor, "admin"]


export const AUTH_LIST = new Map()
for (let i = 0; i < tmpAuthList.length; i++) {
    AUTH_LIST.set(tmpAuthList[i], i)
}

type Primitive =
| string[];
type PlainObject = Record<string, Primitive>;

export const ROLES: PlainObject = {
    "guest": guest,
    'normaluser': normaluser,
    'mentor': mentor,
    'admin': admin,
};

// export const AUTH_LIST = tmpAuthList