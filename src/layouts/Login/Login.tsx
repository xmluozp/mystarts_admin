/** ==========================================================================
 * THIS PAGE: main component: Login
 *  ========================================================================== */

import React from 'react';
import View from './LoginView'

// *********** redux ***********
import { connect } from "react-redux"
import { authActions as myActions } from '_redux_actions'

interface Props {
    onTestLogin: (event: React.MouseEvent<HTMLButtonElement>) => void;
    message?: String
    pageName: String
}


const Dominator: React.FC<Props> = ({ onTestLogin, message, ...props }) => {

    const handleOnSubmit = (states: any) => {

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
const componentShouldUpdate = (preProps: Object, nextProps: Object) => {
    console.log(preProps, nextProps)
    return false
}


// ************************************************ 
// ********************  redux ******************** 
// ************************************************ 
const myState = (state: any) => {
	return {
		message: state.authData.message,
	}
}

const actionCreators = {
    onTestLogin: myActions.test
}

export default connect(myState, actionCreators)(React.memo(Dominator, componentShouldUpdate))
