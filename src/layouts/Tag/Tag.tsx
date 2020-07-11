
/** ==========================================================================
 * THIS PAGE: main component: Newpage
 *  ========================================================================== */

import React, { useEffect, useState } from 'react';
// *********** redux ***********
import { connect } from "react-redux"


// *********** amplify subscription***********
// import { onCreateTag, onDeleteTag, onUpdateTag } from "graphql/subscriptions"
// import { amplifySubscribe } from '_helper'

import { tagActions as myActions } from '_redux_actions'
import View from './TagView'

interface Props {
    // onMouseEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onGetList: Function;
    data: any;
    pageName?: String;
    message?: String;
}

const Dominator: React.FC<Props> = ({ onGetList, data, ...props }) => {



    // 测试翻页, 随后移出去
    const [nextToken, setNextToken] = useState(undefined)
    const [nextNextToken, setNextNextToken] = useState()
    const [previousTokens, setPreviousTokens] = useState([])

    const hasNext = !!nextNextToken
    const hasPrev = previousTokens.length 
    const limit = 1



    // const afterCreateTag = (...something: any) => {
    //     console.log("triggered!", something)
    // }

    useEffect(() => {

        // nextToken就是取哪一页. prevToken是一个数组，所有翻过的都存起来
        // 问题是：是否要继续用dynamodb
        onGetList({
            limit,
            nextToken
        })


        // const unscribe = amplifySubscribe([
        //     { onAction: onCreateTag, afterAction: afterCreateTag }
        // ])

        // return unscribe
    }, [])


    const handleOnNextPage = (data: object) => {
        console.log(data)
        // call function to dispatch
    }

    // ------------------- { pass states and props in }
    const current = {
        ...props,
        handleOnNextPage,
        // --------- pass redux actions and states down
        resultList:data,
    }

    return <View {...current} />
}

// ======================= export =======================
// ************************************************ 
// ********************  redux ******************** 
// ************************************************ 
const myState = (state: any) => ({
    data: state.tagData.data,
})

const actionCreators = {
    onGetList: myActions.getList
}

export default connect(myState, actionCreators)(React.memo(Dominator))
