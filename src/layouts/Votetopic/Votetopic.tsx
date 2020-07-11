
/** ==========================================================================
 * THIS PAGE: main component: vote topics manage
 *  ========================================================================== */

import React, { useEffect, useState } from 'react';

// *********** redux ***********
import { connect } from "react-redux"

import MT from "_dataModel"

// *********** amplify subscription***********
// import { onCreateTag, onDeleteTag, onUpdateTag } from "graphql/subscriptions"
// import { amplifySubscribe } from '_helper'

import { votetopicActions as myActions } from '_redux_actions'
import View from './VotetopicView'
import {alertSuccess, confirmBox} from '_helper'

const BASIC_URL = '/votetopic'

const STORE_NAME = 'votetopicData'
const CONFIRM_MESSAGE_DELETE = 'Are you going to delete?'
const SUCCESS_MESSAGE_DELETED = 'Item deleted'


/*
============================  ^  ==============================
===================== customization part  =====================
============================  ^  ==============================
*/

interface Props {
    // onMouseEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
    data: MT.resultList;
    pagination: MT.pagination;
    pageName?: String;
    message?: String;
    status: String;
    onDelete: Function;
    onGetList: Function;
}

const Dominator: React.FC<Props> = ({data, pagination, status, onDelete, onGetList, ...props }: any) => {

    // TODO: xxx/?filter='JSONSTRING'
    // const params = new URLSearchParams(props.location.search)
    // console.log("params", params.get("filter"))


    const handleDelete = (row: any) => {
        confirmBox(CONFIRM_MESSAGE_DELETE, 'warning', ()=> {
            onDelete(row.id).then(()=>alertSuccess(SUCCESS_MESSAGE_DELETED), ()=>{})
        })
    }

    // ------------------- { pass states and props in }
    const current = {
        ...props,
        status,
        BASIC_URL,
        // --------- pass redux actions and states dow  
        onGetList,
        handleDelete,
        pagination,
        data,
    }

    return <View {...current} />
}

// ======================= export =======================
// ************************************************ 
// ********************  redux ******************** 
// ************************************************ 
const myState = (state: any) => ({
    data: state[STORE_NAME].data,
    pagination: state[STORE_NAME].pagination,
    status: state.loadingData.status
})

const actionCreators = {
    onGetList: myActions.getList,
    onClear: myActions.clearList,
    onDelete: myActions._delete
}

export default connect(myState, actionCreators)(React.memo(Dominator))
