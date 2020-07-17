/** ==========================================================================
 * THIS PAGE: generate reuseable services
========================================================================== */
import { API, Auth } from "aws-amplify"
import MT from "_dataModel"
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql/lib/types";

export const services = (CRUD: any) => {

    const getList = (defaultPk?: MT.partitionKey, query: string = CRUD.list, queryName: string = CRUD.listName) => async (variables: any) => {

        let resultList: MT.resultList = {
            list: [],
        }
        
        const { pkField, pkValue } = defaultPk || {}
        try {
            
            const authData = await Auth.currentAuthenticatedUser()
            const authMode = authData ? GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS : GRAPHQL_AUTH_MODE.AWS_IAM
            const result: any = await API.graphql({
                query,
                variables: { ...variables, [pkField]: pkValue },
                authMode
            })

            // const result: any = await API.graphql(graphqlOperation(CRUD.listSort, variables || {}))
            resultList = {
                list: result.data[queryName].items,
                nextToken: result.data[queryName].nextToken,
                message: result.message,
            }

            return resultList
        } catch (error) {

            console.error("Error getList", queryName, error)
            resultList.error = error
            return Promise.reject(resultList)
        }
    }

    /**
     * 
     * @param query what query to get the parent
     * @param queryName get result of parent
     * @param fieldName field contains the nested list
     * @param fieldID determine the pk
     */
    const getNested = (query: string, queryName: string, fieldName: string, fieldID: string) => async (variables: any) => {
      
         let resultSingleItem: MT.resultSingleItem = {
            item: {}
        }

        let resultList: MT.resultList = {
            list: [],
        }

        try {

            const input = {id: variables[fieldID]}
            delete variables[fieldID]

            // turn variables to a long string, e.g.  a:v, b:v ,c:v 
            const queryParams = [...Object.keys(variables).map(k=> {
                if (!variables[k]) return undefined;
                let returnString = k + ":"
                if (k === 'filter') returnString += JSON.stringify(variables[k])
                if (k === 'nextToken') returnString += `"${variables[k]}"`
                else returnString += variables[k]
                return returnString
            })].join(',')

            const injectedQuery = query.replace(`${fieldName} {\n`, `${fieldName} (${queryParams}) {\n`)

            const authData = await Auth.currentAuthenticatedUser()
            const authMode = authData ? GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS : GRAPHQL_AUTH_MODE.AWS_IAM
            const result: any = await API.graphql({ query: injectedQuery, variables: input, authMode})

            // const result: any = await API.graphql(graphqlOperation(CRUD.get, input))
            const item = result.data[queryName]

            resultList = {
                list: item[fieldName].items,
                nextToken: item[fieldName].nextToken
            }

            resultSingleItem = {
                item,
                message: result.message,
                nestedList: resultList
            }

            return resultSingleItem
        } catch (error) {

            console.error("Error get", queryName, error)
            resultSingleItem.error = error
            return Promise.reject(resultSingleItem)
        }

    }

    // if no id, then get the first
    const get = () => async (id: string) => {

        let resultSingleItem: MT.resultSingleItem = {
            item: {}
        }

        try {
            let item, result;
            const input = { id }
            const authData = await Auth.currentAuthenticatedUser()
            const authMode = authData ? GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS : GRAPHQL_AUTH_MODE.AWS_IAM
            result = await API.graphql({ query: CRUD.get, variables: input, authMode})
            
            // @ts-ignore
            // result = await API.graphql({ query: CRUD.get, variables: input, authMode:  Auth.currentAuthenticatedUser() ? "AMAZON_COGNITO_USER_POOLS" : "IAM" })

            // const result: any = await API.graphql(graphqlOperation(CRUD.get, input))
            item = result.data[CRUD.getName]

            resultSingleItem = {
                item,
                message: result.message,
            }

            return resultSingleItem
        } catch (error) {

            console.error("Error get", CRUD.getName, error)
            resultSingleItem.error = error
            return Promise.reject(resultSingleItem)
        }
    }

    const getFirst = (
        defaultPk?: MT.partitionKey,
        queryList: string = CRUD.list,
        queryListName: string = CRUD.listName
    ) => async (pk?: MT.partitionKey) => {

        let resultSingleItem: MT.resultSingleItem = {
            item: {}
        }

        try {

            const { pkField, pkValue } = pk || defaultPk || {}

            const input = {
                limit: 1,
                [pkField]: pkValue,
                sortDirection: 'DESC'
            }

            const authData = await Auth.currentAuthenticatedUser()
            const authMode = authData ? GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS : GRAPHQL_AUTH_MODE.AWS_IAM
            const result: any = await API.graphql({ query: queryList, variables: input, authMode});

            const itemList = result.data[queryListName].items
            const item = itemList[0]

            resultSingleItem = {
                item,
                message: result.message,
            }

            return resultSingleItem
        } catch (error) {

            console.error("Error get", CRUD.getName, error)
            resultSingleItem.error = error
            return Promise.reject(resultSingleItem)
        }

    }

    const create = (defaultPk?: MT.partitionKey) => async (data) => {

        let resultSingleItem: MT.resultSingleItem = {
            item: {}
        }

        const { pkField, pkValue } = defaultPk || {}

        try {
            const authData = await Auth.currentAuthenticatedUser()

            // partitionKey is then used for sorting (same pk will be a sorting group)
            const input = { ...data, [pkField]: pkValue, owners: [authData.signInUserSession.idToken.payload.sub,] }

            const authMode = authData ? GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS : GRAPHQL_AUTH_MODE.AWS_IAM
            const result: any = await API.graphql({ query: CRUD.create, variables: { input }, authMode})
            // const result: any = await API.graphql(graphqlOperation(CRUD.create, {input}))

            resultSingleItem = {
                item: result.data[CRUD.createName],
                message: result.message,
            }

            return resultSingleItem
        } catch (error) {

            console.error("Error create", CRUD.createName, error)
            resultSingleItem.error = error
            return Promise.reject(resultSingleItem)
        }
    }

    // actually it doesnt need a closure, just follow the coding style from above
    const update = () => async (data) => {
        let resultSingleItem: MT.resultSingleItem = {
            item: {}
        }

        try {
            const input = { ...data }

            const authData = await Auth.currentAuthenticatedUser()
            const authMode = authData ? GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS : GRAPHQL_AUTH_MODE.AWS_IAM

            // @ts-ignore
            const result: any = await API.graphql({ query: CRUD.update, variables: { input }, authMode })
            // const result: any = await API.graphql(graphqlOperation(CRUD.update, {input}))

            resultSingleItem = {
                item: result.data[CRUD.updateName],
                message: result.message,
            }

            return resultSingleItem
        } catch (error) {
            console.error("Error update", CRUD.updateName, error)
            resultSingleItem.error = error
            return Promise.reject(resultSingleItem)
        }
    }

    const _delete = () => async (id) => {
        let resultSingleItem: MT.resultSingleItem = {
            item: {}
        }

        try {
            const input = { id }

            const authData = await Auth.currentAuthenticatedUser()
            const authMode = authData ? GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS : GRAPHQL_AUTH_MODE.AWS_IAM
            const result: any = await API.graphql({ query: CRUD._delete, variables: { input }, authMode})
            // const result: any = await API.graphql(graphqlOperation(CRUD._delete, {input}))
            const item = result.data[CRUD._deleteName]

            resultSingleItem = {
                item,
                message: result.message,
            }

            return resultSingleItem
        } catch (error) {
            console.error("Error delete", CRUD._deleteName, error)
            resultSingleItem.error = error
            return Promise.reject(resultSingleItem)
        }
    }

    return {
        getList,
        getNested,
        getFirst,
        get,
        update,
        create,
        _delete
    }
}