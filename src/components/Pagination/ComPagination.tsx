
import React, { useEffect, useState } from 'react';
// import styled from 'styled-components'
// import scom from './scom'
// import theme from 'assets/jss/theme'

import { Button } from 'element-react'
import { Link } from "react-router-dom";
import MT from '_dataModel'

//=== 
interface Props {
    url: String;
    pagination: MT.pagination;
    onGetList: Function;
    onClear: Function;
    filter?: any;
}

export const ComPagination: React.FC<Props> = React.memo(({
    url,
    pagination,
    onGetList,
    onClear,
    filter,
    ...props }: any) => {

    const { pageIndex, pages } = pagination
    const [loading, setloading] = useState(false)
    const currentPageIndex: number = props && props.match && props.match.params["pageIndex"] || 0

    const [sortDirection, setsortDirection] = useState("DESC")

    useEffect(() => {

        readData(currentPageIndex, sortDirection)

        return () => {
            onClear()
        }

    }, [currentPageIndex, sortDirection])

    const readData = (currentPageIndex, sortDirection) => {
        // =============== pagination可以做
        // 需要传：props, onGetList和filter, onClear
        const { pages } = pagination
        const limit = 8
        let toPage
        let nextToken
        if (currentPageIndex > 0 && !pages[currentPageIndex - 1]) {
            toPage = 0
            nextToken = ''
            props.history.push(`${url}/${0}`)
        } else {
            toPage = currentPageIndex
            nextToken = pages && pages[currentPageIndex - 1]
        }
        
        onGetList({
            filter,
            limit,
            nextToken,
            sortDirection,
            type: "Set"
        }, toPage).then(()=> {
            setloading(false)
        })
    }

    const handleSwitchDirection = () => {

        setsortDirection(prev => prev === 'DESC' ? 'ASC' : 'DESC')
        props.history.push(`${url}/${0}`)
    }

    return <Button.Group>
        {
            pageIndex > 0 ? <Link to={`${url}/${pageIndex > 0 ? pageIndex - 1 : 0}`} >
                <Button type="primary" icon="arrow-left"
                    style={{ borderRadius: "4px 0px 0px 4px", marginRight: -1 }}
                >Previous</Button>
            </Link> :
                <Button type="primary" icon="arrow-left" disabled={true}
                    style={{ borderRadius: "4px 0px 0px 4px", marginRight: -1 }}
                >Previous</Button>
        }
        <Button type="info" icon={
            sortDirection === 'ASC' ? "arrow-up" : "arrow-down"}
            style={{
                borderRadius: "0px 0px 0px 0px",
                marginRight: -1,
                color: '#1f2d3d',
                borderColor: '#d1dbe5',
                backgroundColor: '#ffffff',
                paddingLeft: '20px'
            }}
            onClick={handleSwitchDirection} />

        <Button type="info" 
            style={{
                borderRadius: "0px 0px 0px 0px",
                marginRight: -1,
                color: '#1f2d3d',
                borderColor: '#d1dbe5',
                backgroundColor: '#ffffff',
                paddingLeft: '20px'
            }}
            loading={loading}
            onClick={() => {
                setloading(true)
                readData(currentPageIndex, sortDirection)
            }}> Refresh</Button>

        {
            pages[pageIndex] ? <Link to={`${url}/${pageIndex + 1}`} >
                <Button type="primary"
                    style={{ borderRadius: "0px 4px 4px 0px" }}
                >Next <i className="el-icon-arrow-right el-icon-right"></i></Button>
            </Link> :
                <Button type="primary" disabled={true}
                    style={{ borderRadius: "0px 4px 4px 0px" }}
                >Next <i className="el-icon-arrow-right el-icon-right"></i></Button>
        }
    </Button.Group>
}, () => false)