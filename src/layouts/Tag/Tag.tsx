
/** ==========================================================================
 * THIS PAGE: main component: vote topics manage
 *  ========================================================================== */

import React from 'react';

// *********** redux ***********
import { connect } from "react-redux"

import MT, {type_Tag} from "_dataModel"

// *********** amplify subscription***********
// import { onCreateTag, onDeleteTag, onUpdateTag } from "graphql/subscriptions"
// import { amplifySubscribe } from '_helper'

import { tagActions as myActions } from '_redux_actions'
import View from './TagView'
import {alertSuccess, confirmBox} from '_helper'

const BASIC_URL = '/tag'

const STORE_NAME = 'tagData'
const CONFIRM_MESSAGE_DELETE = 'Are you going to delete?'
const SUCCESS_MESSAGE_DELETED = 'Item deleted'


/*
============================  ^  ==============================
===================== customization part  =====================
============================  ^  ==============================
*/

interface Props {
    // onMouseEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
    pageName?: string;
    status: string;
    message?: string;
    pagination: MT.pagination;

    data: MT.resultList;

    onUpdate: Function;
    onDelete: Function;
    onGetList: Function;
}

const Dominator: React.FC<Props> = ({status, pagination, data, onUpdate, onDelete, onGetList,  ...props }: any) => {

    // TODO: xxx/?filter='JSONSTRING'
    // const params = new URLSearchParams(props.location.search)
    // console.log("params", params.get("filter"))


    // ========================== how to subscribe:
    // const afterCreateTag = (...something: any) => {
    //     console.log("triggered!", something)
    // }

    // useEffect(() => {
        // const unscribe = amplifySubscribe([
        //     { onAction: onCreateTag, afterAction: afterCreateTag }
        // ])

        // return unscribe
    // }, [])



    const handleDelete = (row: type_Tag) => {
        confirmBox(CONFIRM_MESSAGE_DELETE, 'warning', ()=> {
            onDelete(row.id).then(()=>alertSuccess(SUCCESS_MESSAGE_DELETED), ()=>{})
        })
    }

    const handleSwitchActive = (row: type_Tag) => {
        const newTag = {id: row.id, isActive: !row.isActive}
        onUpdate(newTag)
    }

    // ------------------- { pass states and props in }
    const current = {
        ...props,
        status,
        BASIC_URL,
        // --------- pass redux actions and states dow  
        onGetList,
        handleDelete,
        handleSwitchActive,
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
    onUpdate: myActions.update,
    onDelete: myActions._delete
}

export default connect(myState, actionCreators)(React.memo(Dominator))
