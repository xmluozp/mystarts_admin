/** ==========================================================================
 * THIS PAGE: view component: Login
 *  ========================================================================== */

import React from 'react';
import { ComButton, ComInputs } from 'components'

// 样式 的注入
import { makeStyles } from "@material-ui/core/styles"

// 普通样式（问题，无法语法导航）
const styles = {
    pageHeader: {
        backgroundColor: "#445566"
    }
}
const myStyles = makeStyles(styles)

interface Props {
    handleOnSubmit: Function;
    onTestLogin:  (event: React.MouseEvent<HTMLButtonElement>) => void;
    message?: String
}

const View: React.FC<Props> = ({handleOnSubmit, onTestLogin, message, ...props}) => {

    const classes = myStyles();
    return (
    <div className={ classes.pageHeader}>
        login page

        <ComButton>hihi</ComButton>
        <ComInputs.ComInputOutlined/>

        
        <br/>
        {message}
        <button onClick = {onTestLogin}>
            登陆
        </button>
    </div>)
}


export default View