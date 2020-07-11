/** ==========================================================================
 * THIS PAGE: redux constants
 */


import maker from './_maker'

export const AUTH = {
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGOUT_FAILURE: 'LOGOUT_FAILURE',
    TEST: 'TEST',
}

export const ALERT = {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    INFO: 'INFO',
    NOTIFY: 'NOTIFY',
    CLEAR: 'CLEAR'
}

export const LOADING = {
    LOADING: 'LOADING',
    SUCCESS: 'LOADING_SUCCESS',
    FAILURE: 'LOADING_FAILURE',
    CLEAR: 'LOADING_CLEAR'
}


// -------------------------
export const TAG = maker("TAG")
export const VOTETOPIC = maker("VOTETOPIC")


