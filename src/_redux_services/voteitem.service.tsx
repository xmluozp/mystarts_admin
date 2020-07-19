/** ==========================================================================
 * THIS PAGE: could change to REST if needed
========================================================================== */
import { services } from './_maker'
import MT from "_dataModel"

import { listVoteitemByVotetopic, getVoteitem, getVotetopic } from "graphql/queries"
import { updateVoteitem, createVoteitem, deleteVoteitem } from "graphql/mutations"

const CRUD = {
    list: listVoteitemByVotetopic,
    listName: "listVoteitemByVotetopic", 
    get: getVoteitem,
    getName: "getVoteitem",
    update: updateVoteitem,
    updateName: "updateVoteitem",
    create: createVoteitem,
    createName: "createVoteitem",
    _delete: deleteVoteitem,
    _deleteName: "deleteVoteitem",
}

// used to decide where data physically store. and then we can do sorting
const defaultPK: MT.partitionKey = { pkField: "pk", pkValue: 'Voteitem'  }

/*
============================  ^  ==============================
=====================  configure queries  =====================
============================  ^  ==============================
*/

const {
    getList,
    getNested,
    getFirst,
    get,
    create,
    update,
    _delete
} = services(CRUD)

// ==================== customized services: ==================
// const search = async() => {...} 
// ====================  export all services: ==================

// query by votetopic, the votetopicID is dynamic partition key
export const voteitemService = {
    getList: getList(),
    getNested: getNested(getVotetopic, "getVotetopic", "voteitems", "votetopicID"),     
    getFirst: getFirst(defaultPK),
    get: get(),
    create: create(),
    update: update(),
    _delete: _delete(),
};