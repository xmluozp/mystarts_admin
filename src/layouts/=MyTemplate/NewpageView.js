/** ==========================================================================
 * THIS PAGE: view component: Login
 */

import React from 'react';

// ------------------------------------------- TODO: accept props from dominator, delete this comment
const View = ({handleOnSubmit, onTestLogin, message, ...props}) => {
    return (
    <div>
    login page
        <br/>
        {message}

        <button onClick = {onTestLogin}>
            登陆
        </button>
    </div>)
}


export default View