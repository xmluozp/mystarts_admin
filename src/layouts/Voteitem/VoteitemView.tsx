/** ==========================================================================
 * THIS PAGE: view component: vote topic manage
    ==========================================================================*/

import React from 'react';
import { Link } from "react-router-dom";

//=== 
import Grid from "@material-ui/core/Grid";
import { Button } from 'element-react'

//=== 
import MT, { model_Voteitem as dataModel } from '_dataModel'
import { ComTable, ComPagination, ComTitle } from 'components'
import { formatDateTime } from '_helper'


interface Props {
    BASIC_URL: string;

    pageName: string;
    status: string;
    pagination: MT.pagination;
    queryParams?: any;

    data: MT.resultList;
    dataParent: MT.resultSingleItem;
    onGetList: Function;
    onClear: Function;

    handleDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleSwitchActive:  (event: React.MouseEvent<HTMLButtonElement>) => void;
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
const View: React.FC<Props> = ({ BASIC_URL, pageName, status, pagination, queryParams, data, dataParent, onGetList, onClear, handleDelete, handleSwitchActive, ...props }) => {

    const { list } = data || {}
    const CURRENT_URL = `${BASIC_URL}/${pagination.pageIndex}`

    const headCells = [
        { prop: "sortNumber"},
        { prop: "title" },
        {
            prop: "isActive", render: row => <Button
                type="text"
                icon={row.isActive ? 'check' : 'close'}
                size="small"
                onClick={handleSwitchActive.bind(null, row)}
            />
        }
    ];

    const renderButton = (row: any) => {
        return <>
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

    const parentTitle = dataParent && dataParent.item && "[" + dataParent.item.title + "]"

    return (<div>
        <ComTitle>{pageName} {parentTitle}</ComTitle>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <ComPagination
                    {...props}
                    onGetList={onGetList}
                    onClear={onClear}
                    url={BASIC_URL}
                    pagination={pagination}
                    queryParams={queryParams}
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