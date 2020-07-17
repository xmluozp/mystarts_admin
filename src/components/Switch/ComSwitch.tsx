
import React from 'react';
// import styled from 'styled-components'
// import scom from './scom'
// import theme from 'assets/jss/theme'

import { shallowCompare } from '_helper'
import Switch from "@material-ui/core/Switch";
import FormControlLabel from '@material-ui/core/FormControlLabel';

const isEqual = (prevProps, nextProps) => {

    return shallowCompare(prevProps, nextProps, [
        'value',
        'disabled',
    ])
}


// OutlinedInput 是原本的组件名
// const OutlinedInputCustom = scom(OutlinedInput)




export const ComSwitch = React.memo(({
    id,
    label = "Field Name",
    value = false,
    onChange = () => { },
    disabled = false,

}: any) => {

    const handleOnChange = (e, v) => {

        onChange(id, v);
    }

    const isChecked = value === true
    
    return (
        <FormControlLabel
          control={
            <Switch
              id={id}
              checked={isChecked}
              onChange={handleOnChange}
              value={value ? true : false}
              disabled={disabled}
              color="primary"
              inputProps={{ 'aria-label': `${label} checkbox` }}
            />
          }
          label={`${label}`}
        />
      );
}, isEqual)