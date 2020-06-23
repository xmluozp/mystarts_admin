

/** ==========================================================================
 * THIS PAGE: main component: Forgot password
 *  ========================================================================== */

import React from 'react';
import View from './ForgotPasswordView'

// *********** redux ***********
import { connect } from "react-redux"
import {authActions as myActions} from '_redux_actions'



const Dominator = ({onTestLogin, message, ...props}) => {

    const handleOnSubmit = (states) => {

        // TODO: login
        console.log("login")
    }


    // ------------------- { pass states and props in }
    const states = {
        handleOnSubmit,

        // --------- pass redux actions and states down
        onTestLogin,
        message
    }

    return <View {...props} {...states} />
}


// ======================= export =======================
const componentShouldUpdate = (preProps, nextProps) => {
    return false
}


// ************************************************ 
// ********************  redux ******************** 
// ************************************************ 
const myState = (state) => {
	return {
		message: state.authData.message,
	}
}

const actionCreators = {
	onTestLogin: myActions.test
}

export default connect(myState, actionCreators)(React.memo(Dominator, componentShouldUpdate))


