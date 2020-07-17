/** ==========================================================================
 * THIS PAGE: view component: vote topic manage
    ==========================================================================*/

import React from 'react';
import { Link } from "react-router-dom";

//=== 
import Grid from "@material-ui/core/Grid";
import { Button } from 'element-react'

//=== 
import MT, { model_Votetopic as dataModel } from '_dataModel'
import { ComTable, ComPagination, ComTitle } from 'components'
import { formatDateTime } from '_helper'


interface Props {
    BASIC_URL:      string;

    pageName:       string;
    status:         string;
    pagination:     MT.pagination;

    data:           MT.resultList;
    onGetList:      Function;
    onClear:        Function

    handleDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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

const headCells = [
    { prop: "createdAt", render: row => formatDateTime(row["createdAt"]) },
    { prop: "title" },
    { prop: "description" },
];

// ------------------------------------------- TODO: accept props from dominator, delete this comment
const View: React.FC<Props> = ({ BASIC_URL, pageName, status, pagination, data, onGetList, onClear, handleDelete, ...props }) => {

    const { list } = data || {}
    const CURRENT_URL = `${BASIC_URL}/${pagination.pageIndex}`

    const renderButton = (row: any) => {
        return <>
            <Link to={`/voteitem/${row.id}`} style={{ marginRight: 10 }}>
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
        <ComTitle>{pageName}</ComTitle>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <ComPagination
                    {...props}
                    onGetList={onGetList}
                    onClear={onClear}
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