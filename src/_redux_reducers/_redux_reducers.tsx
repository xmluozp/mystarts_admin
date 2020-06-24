/** ==========================================================================
 * THIS PAGE: redux reducers
 */

import { combineReducers } from "redux";
import auth from "./authReducer";
import loading from "./loadingReducer";
import alert from "./alertReducer";

export default combineReducers({
    authData: auth, // login status
    loadingData: loading,
    alertData: alert,
})