
import React from 'react';
import scom from './scom'

// import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"


interface Props {

}

const ToolbarCustom = scom(Toolbar)


export const ComTitle: React.FC<Props> = (props: any) => {

    return <ToolbarCustom>
        <i className="el-icon-caret-right"></i>
        <Typography variant="h6" noWrap>
            {props.children}
        </Typography>
    </ToolbarCustom>


}
