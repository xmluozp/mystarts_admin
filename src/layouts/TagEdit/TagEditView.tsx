/** ==========================================================================
 * THIS PAGE: view component: tag manage
    ==========================================================================*/

import React from 'react';
import MT, { model_Tag as dataModel } from '_dataModel'
// import { Link } from "react-router-dom";

//=== 
import Grid from "@material-ui/core/Grid";
import { ComPaper, ComForm, ComTitle, ComInputs, ComSwitch } from 'components'

import { Button } from "element-react";


interface Props {
    behavior?: MT.text_behavior;
    pageName: string;
    status: string;

    dataLocal: MT.resultList;
    handleSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onChange: Function;
}

// ------------------------------------------- use any to accept props. waiting for typescript update...
const View: React.FC<Props> = ({ behavior, pageName, status, dataLocal, handleSubmit, onChange, ...props }: any) => {

    return (<div>
        <ComTitle>{pageName} - {behavior}</ComTitle>

        <ComPaper status={status}>
            <Grid container spacing={2}>
                <ComForm
                    dataLocal={dataLocal}
                    dataModel={dataModel}
                    onChange={onChange}>

                    <Grid item xs={12}>
                        <ComInputs.ComInput fieldId="sortNumber" type="number" />
                    </Grid>
                    <Grid item xs={12}>
                        <ComInputs.ComInput fieldId="name" />
                    </Grid>
                    <Grid item xs={12}>
                        <ComSwitch fieldId="isActive" />
                    </Grid>

                </ComForm>
            </Grid>

            <Grid container spacing={2}>
                <Grid item>
                    <Button
                        type="success"
                        icon="edit"
                        onClick={handleSubmit}>
                        Save</Button>
                </Grid>
            </Grid>
        </ComPaper>



    </div>)
}


export default View