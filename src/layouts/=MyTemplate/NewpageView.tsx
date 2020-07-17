/** ==========================================================================
 * THIS PAGE: view component: Login
 */

import React from 'react';

interface Props {
    handleOnSubmit: Function;
    onTestLogin:  (event: React.MouseEvent<HTMLButtonElement>) => void;
    message?: string
}

// ------------------------------------------- TODO: accept props from dominator, delete this comment
const View: React.FC<Props> = ({ handleOnSubmit, onTestLogin, message, ...props }) => {
    return (<div>
            login page
            <br />
            {message}

            <button onClick={onTestLogin}>
                登陆
        </button>
        </div>)
}


export default View