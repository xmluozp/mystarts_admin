
import React from 'react';
import View from './TestView'



/** ==========================================================================
 * THIS PAGE: main component
 */
const Test = ({...props}) => {

    const handleOnClick = (states) => {
        console.log("login")
        
    }

    console.log(props.myFunctionName, props )

    // pass states and props in
    const states = {
        handleOnClick
    }

    return <View {...props} {...states} />
}

export const withTest = (param1, props) => {
    return <Test myFunctionName ={param1}  {...props} />
}

export default Test