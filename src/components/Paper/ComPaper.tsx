
import React from 'react';
import scom from './scom'

// import AppBar from "@material-ui/core/AppBar"

import Typography from "@material-ui/core/Typography"

import Paper from '@material-ui/core/Paper';

interface Props {
    status?: String
}

const ComPaperCustom = scom(Paper)


export const ComPaper: React.FC<Props> = ({status, ...props}: any) => {

    return status ==='loading' ? <ComPaperCustom  {...props}> 
    Loading...
    </ComPaperCustom> : <ComPaperCustom {...props}/>


}
