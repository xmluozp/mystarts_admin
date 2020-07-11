/** ==========================================================================
 * THIS PAGE: view component: vote topic manage
    ==========================================================================*/

import React, { useState } from 'react';
import { Link } from "react-router-dom";

//=== 
import Grid from "@material-ui/core/Grid";
import { Button } from 'element-react'

//=== 
import { API } from 'aws-amplify';

//=== 
import MT, { model_Votetopic as dataModel } from '_dataModel'
import { ComTable, ComPagination, ComTitle } from 'components'
import { formatDateTime } from '_helper'


interface Props {
    BASIC_URL: String;
    handleDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    status: String;
    pagination: MT.pagination;
    data: MT.resultList;
}

// const testLambda = async () => {

//     try {
//         const result = await API.post('mystartsapi', '/items', {
//             body: {}
//         })

//         console.log(result)         
//     } catch (error) {
//         console.log(error)
//     }
// }


// ------------------------------------------- TODO: accept props from dominator, delete this comment
const View: React.FC<Props> = ({ BASIC_URL, handleDelete, status, pagination, data, ...props }: any) => {

    const { list } = data || {}

    const headCells = [
        { prop: "createdAt", render: row => formatDateTime(row["createdAt"]) },
        { prop: "title" },
        { prop: "description" },
    ];

    const CURRENT_URL = `${BASIC_URL}/${pagination.pageIndex}`

    const renderButton = (row: any) => {
        return <>
            <Link to={`${CURRENT_URL}/items/${row.id}`} style={{ marginRight: 10 }}>
                <Button
                    type="info"
                    size="small"
                    icon="more"> items</Button></Link>
            <Link to={`${CURRENT_URL}/edit/${row.id}`} style={{ marginRight: 10 }}>
                <Button
                    type="warning"
                    size="small"
                    icon="edit"> edit</Button></Link>
            <Button
                type="danger"
                icon="delete2"
                size="small" onClick={handleDelete.bind(null, row)}> delete</Button>
        </>
    }

    return (<div>
        <ComTitle>{props.pageName}</ComTitle>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <ComPagination
                    {...props}
                    onGetList={props.onGetList}
                    onClear={props.onClear}
                    url={BASIC_URL}
                    pagination={pagination}
                />
            </Grid>
            <Grid item xs={6} >
                <Grid container justify="flex-end">
                    <Link to={`${CURRENT_URL}/create`} style={{ marginRight: 10 }}>
                        <Button type="success" icon="plus">Create</Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <ComTable
                    status={status}
                    headCells={headCells}
                    renderButton={renderButton}
                    data={list}
                    dataModel={dataModel}
                />
            </Grid>
        </Grid>
    </div>)
}


export default View