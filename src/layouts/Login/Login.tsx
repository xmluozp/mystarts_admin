/** ==========================================================================
 * THIS PAGE: main component: Login
 *  ========================================================================== */

import React from 'react';
import View from './LoginView'


// *********** redux ***********
import { connect } from "react-redux"
import { authActions as myActions } from '_redux_actions'

interface Props {
    // onTestLogin: (event: React.MouseEvent<HTMLButtonElement>) => void;
    // message?: string
    pageName: string
}

const Dominator: React.FC<Props> = ({ ...props }) => {

    return <View {...props} />
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
