/** ==========================================================================
 * THIS PAGE: view component: Forgot password
 */

import React from 'react';


const View = ({handleOnSubmit, onTestLogin, message, ...props}) => {
    return (
    <div>
    login page
        <br/>
        {message}

        <button onClick = {onTestLogin}>
            forgot password
        </button>
    </div>)
}


export default View