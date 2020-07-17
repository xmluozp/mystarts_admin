/** ==========================================================================
 * THIS PAGE: redux reducers
 */

import { combineReducers } from "redux";


import auth from './authReducer';
import loading from "./loadingReducer";
import alert from './alertReducer';
import tag from './tagReducer';
import votetopic from './votetopicReducer'
import voteitem from './voteitemReducer'

export default combineReducers({
    authData: auth, // login status
    loadingData: loading,
    alertData: alert,
    
    tagData: tag,
    votetopicData: votetopic,
    voteitemData: voteitem,
})