/** ==========================================================================
 * THIS PAGE: could change to REST if needed
========================================================================== */
import { services } from './_maker'
import MT from '_dataModel'

import { listTagOrderbySortNumber, getTag } from "graphql/queries"
import { updateTag, createTag, deleteTag } from "graphql/mutations"

const CRUD = {
    list: listTagOrderbySortNumber,
    listName: "listTagOrderbySortNumber",
    get: getTag,
    getName: "getTag",
    update: updateTag,
    updateName: "updateTag",
    create: createTag,
    createName: "createTag",
    _delete: deleteTag,
    _deleteName: "deleteTag",
}

const defaultPK: MT.partitionKey = { pkField: "pk", pkValue: 'Tag' } 
// used to decide where data physically store. and then we can do sorting

/*
============================  ^  ==============================
=====================  configure queries  =====================
============================  ^  ==============================
*/

const {
    getList,
    getFirst,
    get,
    create,
    update,
    _delete
} = services(CRUD)

// ==================== customized services: ==================

// const search = async() => {...} 

// ====================  export all services: ==================
export const tagService = {
    getList: getList(defaultPK),
    get: get(),
    getFirst: getFirst(defaultPK),
    create: create(defaultPK),
    update: update(),
    _delete: _delete(),
};