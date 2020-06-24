
/** ==========================================================================
 * THIS PAGE: main component: Newpage
 *  ========================================================================== */

import React from 'react';

// ------------------------------------------- TODO: import the view page, delete this comment
import View from './NewpageView'

// *********** redux ***********
import { connect } from "react-redux"

// ------------------------------------------- TODO: change to the action, delete this comment
import {authActions as myActions} from '_redux_actions'

interface Props {
    onTestLogin:  (event: React.MouseEvent<HTMLButtonElement>) => void;
	message?: String
}

// ------------------------------------------- TODO: change redux props passing in, delete this comment
const Dominator : React.FC<Props> = ({onTestLogin, message, ...props}) => {
    const handleOnSubmit = (data: Object) => {
        console.log(data)
        // call function to dispatch
    }

// ------------------------------------------- TODO: pass states and props, delete this comment
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

// ------------------------------------------- TODO: delete it if no need, delete this comment
// ------------------------------------------- TODO: also delete the param from the bottom line, delete this comment
const componentShouldUpdate = (preProps: Object, nextProps: Object) => {
    console.log(preProps, nextProps)
    return false
}


// ************************************************ 
// ********************  redux ******************** 
// ************************************************ 

// ------------------------------------------- TODO: change the state and action, delete this comment
const myState = (state: any) => {
	return {
		message: state.authData.message,
	}
}

const actionCreators = {
	onTestLogin: myActions.test
}

export default connect(myState, actionCreators)(React.memo(Dominator, componentShouldUpdate))
