
import React from 'react';
import scom from './scom'



export const ComButton = React.memo(({...props}) => {
    return <button >{props.children}</button>


})