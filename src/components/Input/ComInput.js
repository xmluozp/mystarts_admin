
import React from 'react';
import styled from 'styled-components'
import scom from './scom'
import theme from 'assets/jss/theme'

import { OutlinedInput } from "@material-ui/core"


const ComInput = React.memo(() => {
    return <>
    thi is input
    </>
})


// OutlinedInput 是原本的组件名
const OutlinedInputCustom = scom(OutlinedInput)




const ComInputOutlined = React.memo(() => {
    return <OutlinedInputCustom/>
})


export const ComInputs = {
    ComInput,
    ComInputOutlined
}