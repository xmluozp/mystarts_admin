
import React from 'react';
// import styled from 'styled-components'
// import scom from './scom'
// import theme from 'assets/jss/theme'

import { Table } from 'element-react'

interface Props {
    headCells: any[];
    renderButton: Function;
    dataModel: any;
    data: any[];
    status?: String;
}


export const ComTable: React.FC<Props> = React.memo(({ headCells, renderButton, dataModel, data, status, ...props }: any) => {

    const columns = []

    for (let i = 0; i < headCells.length; i++) {

        const { prop } = headCells[i];
        columns.push(
            {
                label: dataModel[prop].label,
                ...headCells[i]
            }
        )
    }

    columns.push(
        {
            width: 320,
            align: "right",
            render: renderButton,
        })

    const emptyText = 
        status === 'loading' ? 'Loading' :
        status === 'success' ? 'No Data' :
        status === 'failure' ? 'Error' : ""


    return <Table
        columns={columns}
        data={data}
        stripe={true}
        emptyText = {emptyText}
        {...props} />
})