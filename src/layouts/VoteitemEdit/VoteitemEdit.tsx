
/** ==========================================================================
 * THIS PAGE: main component: vote topics manage
 *  ========================================================================== */

import React, { useEffect, useState } from 'react';

import { alertSuccess, h_singleItemFieldIncrement } from '_helper'

// *********** redux ***********
import { connect } from "react-redux"
import MT from "_dataModel"
import { voteitemActions as myActions } from '_redux_actions'


import View from './VoteitemEditView'

const STORE_NAME = 'voteitemData'
const FIELDS_NEED_TO_UPDATE = [
    'id',
    'title',
    'isActive',
    'sortNumber',
    'voteitemVotetopicId'
]


const SUCCESS_MESSAGE_CREATED = 'Item created'
const SUCCESS_MESSAGE_UPDATED = 'Item updated'

/*
============================  ^  ==============================
===================== customization part  =====================
============================  ^  ==============================
*/

interface Props {
    // onMouseEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
    behavior?: MT.text_behavior;
    pageName?: string;
    status: string;
    message?: string;

    dataGet: MT.resultSingleItem;
    onGet: Function;
    onGetFirst: Function;
    onClear: Function;
    onUpdate: Function;
    onCreate: Function;
}

const Dominator: React.FC<Props> = ({ behavior, status, dataGet, onGet, onGetFirst, onClear, onUpdate, onCreate, ...props }: any) => {

    const id: string = props.match.params["id"]
    const votetopicID: string = props.match.params["votetopicID"]

    const [dataLocal, setdataLocal] = useState({})

    // get data from id
    useEffect(() => {
        if (behavior === 'edit') onGet(id)
        else if (behavior === 'create') onGetFirst({
            pkField: 'votetopicID',
            pkValue: votetopicID
        }) // get the first, fetch the sortNumber

        return onClear
    }, [id, behavior, onGet, onClear, onGetFirst, votetopicID])

    // insert data to the form
    useEffect(() => {
        if (behavior === 'edit' && dataGet) setdataLocal(dataGet.item)
        else if (behavior === 'create' && dataGet) setdataLocal({
            sortNumber: h_singleItemFieldIncrement(dataGet, 'sortNumber')
        })

    }, [dataGet, behavior])

    // input onchange
    const onChange = (id, value) => setdataLocal(prevdataLocal => ({ ...prevdataLocal, [id]: value }))

    // submit
    const handleSubmit = () => {

        if (!dataLocal) return

        // ----------------------- what should update (not all fields are writable) ------------------------ {
        const uploadData = {}
        for (let i = 0; i < FIELDS_NEED_TO_UPDATE.length; i++) {
            const key = FIELDS_NEED_TO_UPDATE[i]
            uploadData[key] = dataLocal[key] ? dataLocal[key] : undefined
        }
        // }

        uploadData["votetopicID"] = votetopicID



        if (behavior !== 'create') {
            onUpdate(uploadData)
                .then(() => alertSuccess(SUCCESS_MESSAGE_UPDATED), () => { })
        }
        else {
            onCreate(uploadData)
                .then(res => setdataLocal({
                    sortNumber: h_singleItemFieldIncrement(res, 'sortNumber')
                }))
                .then(() => alertSuccess(SUCCESS_MESSAGE_CREATED), () => { })
        }
    }

    // ------------------- { pass states and props in }
    const current = {
        ...props,
        behavior,
        status,
        // --------- pass redux actions and states dow  
        handleSubmit,
        onChange,
        dataLocal,
    }

    return <View {...current} />
}

// ======================= export =======================
// ************************************************ 
// ********************  redux ******************** 
// ************************************************ 
const myState = (state: any) => ({
    dataGet: state[STORE_NAME].dataGet,
    pagination: state[STORE_NAME].pagination,
    status: state.loadingData.status
})

const actionCreators = {
    onGet: myActions.get,
    onGetFirst: myActions.getFirst,
    onClear: myActions.clear,
    onUpdate: myActions.update,
    onCreate: myActions.create,
}

export default connect(myState, actionCreators)(React.memo(Dominator))
