
import React from 'react';
// import styled from 'styled-components'
import scom from './scom'
// import theme from 'assets/jss/theme'

import {shallowCompare} from '_helper'
import { OutlinedInput } from "@material-ui/core"
import TextField from "@material-ui/core/TextField";

const isEqual = (prevProps, nextProps) => {

    return shallowCompare(prevProps, nextProps, [
        'value',
        'disabled',
        'rows',
        'error',
        'helperText'
    ])
}

const ComInput = React.memo(({
    id,
    label = "Field Name",
    value = "",
    onChange = () => {},
    error = false,
    type = "text",
    helperText = "",
    fullWidth = true,
    disabled = false,
    multiline = false,
    rows,
    rowsMax = 5
}: any) => {

    const handleOnChange = e => {
        value = e.target.value;  
        onChange(id, value);
    }

    return <TextField
    fullWidth={fullWidth}
    error={!disabled && error}
    disabled={disabled}
    id={id}
    type={type}
    label={label}
    onChange={handleOnChange}
    margin="dense"
    value={value || (type === "number" ? 0 : "")}
    helperText={!disabled && helperText}
    multiline = {multiline}
    rows={rows}
    rowsMax={rowsMax}
    inputProps={{
      style: type === "number" ? {textAlign: "right"}: {}
    }}
  />
}, isEqual)


// OutlinedInput 是原本的组件名
const OutlinedInputCustom = scom(OutlinedInput)


const ComInputOutlined = React.memo(() => {
    return <OutlinedInputCustom/>
})


export const ComInputs = {
    ComInput,
    ComInputOutlined
}