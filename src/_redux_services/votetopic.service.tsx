/** ==========================================================================
 * THIS PAGE: could change to REST if needed
========================================================================== */

// import { authHeader, handleResponse,  h_queryString, h_nilFilter, h_nilFilter_update } from '_helper';
// import {RESTURL} from '../config'
import { API, graphqlOperation } from "aws-amplify"
import MT from "_dataModel"

// 
import { listVotetopics, getVotetopic } from "graphql/queries"
import { updateVotetopic, createVotetopic, deleteVotetopic} from "graphql/mutations"

const CRUD = {
    list: listVotetopics,
    listName: "listVotetopics",
    get: getVotetopic,
    getName: "getVotetopic",
    update: updateVotetopic,
    updateName: "updateVotetopic",
    create: createVotetopic,
    createName: "createVotetopic",
    _delete: deleteVotetopic,
    _deleteName: "deleteVotetopic",
}

export const votetopicService = {
    getList,
    get,
    create,
    update,
    _delete,
};

/*
============================  ^  ==============================
===================== customization part  =====================
============================  ^  ==============================
*/

async function getList(variables: any) {

    let resultList: MT.resultList = {
        list: [],
    }

    try {
        // console.log("???1")
        // const result: any = await API.graphql(graphqlOperation(CRUD.list, variables || {}))
        
        // @ts-ignore
        // const result: any = await API.graphql({query: CRUD.list, authMode:"API_KEY"})

        //   graphqlOperation()
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

async function get(id: String) {

    let resultSingleItem: MT.resultSingleItem = {
        item: {}
    }

    try {
        const input = {id}

        // @ts-ignore
        // const result: any = await API.graphql({query: CRUD.get, variables: input, authMode:"API_KEY"})

        const result: any = await API.graphql(graphqlOperation(CRUD.get, input))
        const item = result.data[CRUD.getName]

        resultSingleItem = {
            item,
            message: result.message,
        }

        return resultSingleItem
    } catch (error) {
        resultSingleItem.error = error
        return Promise.reject(resultSingleItem)
    }   
}

async function create(data) {

    let resultSingleItem: MT.resultSingleItem = {
        item: {}
    }

    try {

        // {... type: "Set"} is used for sorting
        const input = {...data, type: "Set"}

        // @ts-ignore
        // const result: any = await API.graphql({query: CRUD.create, variables: {input}, authMode:"AMAZON_COGNITO_USER_POOLS"})
        const result: any = await API.graphql(graphqlOperation(CRUD.create, {input}))
       
        resultSingleItem = {
            item: result.data[CRUD.createName],
            message: result.message,
        }

        return resultSingleItem
    } catch (error) {
        resultSingleItem.error = error
        return Promise.reject(resultSingleItem)
    }   
}

async function update(data) {
    let resultSingleItem: MT.resultSingleItem = {
        item: {}
    }

    try {

        const input = {...data}

        // @ts-ignore
        // const result: any = await API.graphql({query: CRUD.update, variables: {input}, authMode:"AMAZON_COGNITO_USER_POOLS"})
        const result: any = await API.graphql(graphqlOperation(CRUD.update, {input}))
       
        console.log("update result",result)
       
        resultSingleItem = {
            item: result.data[CRUD.updateName],
            message: result.message,
        }

        return resultSingleItem
    } catch (error) {
        console.log(error)
        resultSingleItem.error = error
        return Promise.reject(resultSingleItem)
    }  
}

async function _delete(id) {
    let resultSingleItem: MT.resultSingleItem = {
        item: {}
    }

    try {
        const input = {id}

        // @ts-ignore
        // const result: any = await API.graphql({query: CRUD._delete, variables: {input}, authMode:"API_KEY"})
        const result: any = await API.graphql(graphqlOperation(CRUD._delete, {input}))
        const item = result.data[CRUD._deleteName]

        resultSingleItem = {
            item,
            message: result.message,
        }

        return resultSingleItem
    } catch (error) {
        resultSingleItem.error = error
        return Promise.reject(resultSingleItem)
    }
}