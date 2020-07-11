/** ==========================================================================
 * THIS PAGE: could change to REST if needed
========================================================================== */

// import { authHeader, handleResponse,  h_queryString, h_nilFilter, h_nilFilter_update } from '_helper';
// import {RESTURL} from '../config'
import { API, graphqlOperation } from "aws-amplify"
import { listTags } from "graphql/queries"
import MT from "_dataModel"

const CRUD = {
    list: listTags,
    listName: "listTags",

}

export const tagService = {
    getList,
    get,
    create,
    update,
    _delete,
};

async function getList(variables: any) {
    console.log("get data list")

    let resultList: MT.resultList = {
        list: [],
    }

    try {
        const result: any = await API.graphql(graphqlOperation(CRUD.list, variables || {}))
        resultList = {
            list: result.data[CRUD.listName].items,
            nextToken: result.data[CRUD.listName].nextToken,
            message: result.message,
        }

        return resultList
    } catch (error) {
        resultList.error = error
        return Promise.reject(resultList)
    }   
}

async function get(...sth: any) {

    return { test: "hello get" }
}

async function create(...sth: any) {
    return { test: "hello create" }
}

async function update(...sth: any) {
    return { test: "hello update" }
}

async function _delete(...sth: any) {
    return { test: "hello delete" }
}