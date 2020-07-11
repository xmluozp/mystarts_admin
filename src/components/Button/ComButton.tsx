
import React from 'react';
import scom from './scom'

import { Button } from 'element-react'
import { Link } from "react-router-dom";


// ================ edit column of table
const ComEditButton:any = React.memo(({...props}) => {
    return <Button {...props}>{props.children}</Button>
})

const ComEditButtonLink:any = React.memo(({to, ...props}:any) => {
    return <Link to={to}>{props.children}</Link>
})



export const ComButtons = {
    ComEditButton,
    ComEditButtonLink
}