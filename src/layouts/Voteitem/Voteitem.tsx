
/** ==========================================================================
 * THIS PAGE: main component: vote topics manage
 *  ========================================================================== */

import React from 'react';

// *********** redux ***********
import { connect } from "react-redux"

import MT, {type_Voteitem}  from "_dataModel"

// *********** amplify subscription***********
// import { onCreateTag, onDeleteTag, onUpdateTag } from "graphql/subscriptions"
// import { amplifySubscribe } from '_helper'

import { voteitemActions as myActions } from '_redux_actions'
import View from './VoteitemView'
import {alertSuccess, confirmBox} from '_helper'

const STORE_NAME = 'voteitemData'
const CONFIRM_MESSAGE_DELETE = 'Are you going to delete?'
const SUCCESS_MESSAGE_DELETED = 'Item deleted'


/*
============================  ^  ==============================
===================== customization part  =====================
============================  ^  ==============================
*/

interface Props {
    pageName?: string;
    status: string;
    message?: string;
    pagination: MT.pagination;

    data: MT.resultList;
    dataParent: MT.resultSingleItem;

    onUpdate: Function;
    onDelete: Function;
    onGetList: Function;
    onGetNested: Function;
}

// 现在的问题是这个必须在里面。但是{} 每次都会刷新，触发刷新

// onGetList :onGetList.bind(null, {
//     pkField: "votetopicID",
//     pkValue: votetopicID
// }),

const Dominator: React.FC<Props> = ({status, pagination, data, dataParent, onUpdate, onDelete, onGetList, onGetNested, ...props }: any) => {

    // TODO: xxx/?filter='JSONSTRING'
    // const params = new URLSearchParams(props.location.search)
    // console.log("params", params.get("filter"))

    const votetopicID: string = props.match.params["votetopicID"]

    const handleDelete = (row: any) => {
        confirmBox(CONFIRM_MESSAGE_DELETE, 'warning', ()=> {
            onDelete(row.id).then(()=>alertSuccess(SUCCESS_MESSAGE_DELETED), ()=>{})
        })
    }

    const handleSwitchActive = (row: type_Voteitem) => {
        const newItem = {id: row.id, isActive: !row.isActive}
        onUpdate(newItem)
    }

    const queryParams = {
        votetopicID
    }

    const BASIC_URL = '/voteitem' + '/' + votetopicID
    // ------------------- { pass states and props in }
    const current = {
        ...props,
        status,
        BASIC_URL,
        // --------- pass redux actions and states dow  
        onGetList: onGetNested,
        handleDelete,
        handleSwitchActive,

        pagination,
        queryParams,
        data,
        dataParent,
    }

    return <View {...current} />
}

// ======================= export =======================
// ************************************************ 
// ********************  redux ******************** 
// ************************************************ 
const myState = (state: any) => ({
    data: state[STORE_NAME].data,
    dataParent: state["votetopicData"].dataGet,
    pagination: state[STORE_NAME].pagination,
    status: state.loadingData.status
})

const actionCreators = {
    onUpdate: myActions.update,
    onGetList: myActions.getList,
    onGetNested: myActions.getNested,
    onClear: myActions.clearList,
    onDelete: myActions._delete
}

export default connect(myState, actionCreators)(React.memo(Dominator))
