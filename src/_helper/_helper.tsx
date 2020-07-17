/** ==========================================================================
 * THIS PAGE: helper functions
 */
import React, { lazy as reactLazy } from "react";
import { format } from 'date-fns';
import { Notification, MessageBox } from "element-react";
import { Auth, API, graphqlOperation } from "aws-amplify"
import { createHashHistory } from 'history';

import MT from '_dataModel'
import { store } from './store'
import { keyBy } from "lodash";

// const history = createHashHistory({ forceRefresh: true });
export const history = createHashHistory();
export const authHeader = () => {
    // return authorization header with jwt token
    try {
        let user = JSON.parse(localStorage.getItem('mrsuser') || "");

        if (user && user.token) {
            return { 'Authorization': user.token };
        } else {
            return {};
        }
    } catch (error) {
        console.log(error)
    }
}

/**
 * 
 * @param {*} importpath 
 * @param { syntax: m=>m.functionname.bind(null, param1, param2, ...params)} callback 
 */
export const lazy = (importpath: Promise<any>, callback?: Function) => {
    if (typeof (callback) !== 'function') {
        return reactLazy(() => importpath)
    } else {
        return reactLazy(() => importpath.then(m => ({ default: callback(m) })))
    }
}

/**
 * Warning: dont leave condition undefined, otherwise the user will subscribe the whole table.
 * @param onAction 
 * @param getCondition: userId => ({...conditions}).
 */
export const amplifySubscribe = (onActions: { onAction: any, afterAction: Function }[], getCondition?: Function) => {

    let subscriptions: any[]

    // subscribe
    const s = async () => {
        try {
            // get user
            const user = await Auth.currentAuthenticatedUser()
            const owner = String(user.username)

            // filter of subscription
            const condition = getCondition ? getCondition(owner) : {}

            for (let i = 0; i < onActions.length; i++) {
                const listener = onActions[i];

                let graphqlCallPromise: any;

                graphqlCallPromise = API.graphql(
                    // graphqlOperation(onCreateTodo, {owner: user.username})
                    graphqlOperation(listener.onAction, condition)
                )

                subscriptions[i] = graphqlCallPromise.subscribe({
                    next: listener.afterAction
                })
            }

        } catch (error) {
            console.error("subscription error, ", error)
        }
    }

    s()

    return () => {

        console.log("unsubscribe:", subscriptions)
        for (let i = 0; i < subscriptions.length; i++) {
            subscriptions[i] && subscriptions[i].unsubscribe();
        }
    }
}


/**
 * Will be used on React.memo, check if needs to render
 * @param objA 
 * @param objB 
 * @param columns 
 */
export const shallowCompare = (
    objA: any, objB: any, columns?: string[]
) => {

    if( objA === objB) return true
    if(!objA || !objB) return false // if not equal and one is undefined. other will not undefined.

    // if needs to compare particular fields
    if(columns) {
        for (let i = 0; i < columns.length; i++) {
            if (objA[columns[i]] !== objB[columns[i]]) {
                return false;
            }
        }
    } else { // compare all
        const keysA = Object.keys(objA) || []
        const keysB = Object.keys(objB) || []
        if (keysA.length !==  keysB.length) return false
        for (let i = 0; i < keysA.length; i++) {
            if (objA[keysA[i]] !== objB[keysB[i]]) {
                return false;
            }
        }
    }

    return true;
}

// ============================== popups:

export const alertError = (message: string, params?: any) => {
    Notification({
        title: "Error",
        message: <div style={{textAlign: 'left'}}>{message}</div>,
        type: "error",
        duration: 5000,
        ...params
    })
}
export const alertSuccess = (message: string, params?: any) => {
    Notification({
        title: "Success",
        message: <div style={{textAlign: 'left'}}>{message}</div>,
        type: "success",
        duration: 2000,
        ...params
    })
}
export const confirmBox = ( message: string, type: "success" | "info" | "warning" | "error", fn: Function) => {
    MessageBox.confirm(message, 'Confirm', {
        type: type,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then(() => {
        fn()
      }).catch(() => {});
}


// ============================== converts:
export const convertDollarsToCents = (price) => (price * 100).toFixed(0)
export const convertCentsToDollars = (price) => (price / 100).toFixed(2)
export const formatDate = date => {
    const d = Date.parse(date);
    return format(d, "yyyy-MM-dd")
}
export const formatDateTimeTwoline = date => {
    const d = Date.parse(date);
    return <>{format(d, `yyyy-MM-dd`)}<br />{format(d, `HH:mm:ss`)}</>
}
export const formatDateTime = date => {
    const d = Date.parse(date);
    return format(d, `yyyy-MM-dd HH:mm:ss`)
}



// ============================== just used to sorten code:

export const h_singleItemFieldIncrement = (singleItem: MT.resultSingleItem, field, interval:number = 10) => {
    return singleItem.item && !isNaN(singleItem.item.sortNumber) ? singleItem.item.sortNumber + interval : 0
}





const helper = {
    store,
    history,
    authHeader,
    lazy,
    amplifySubscribe,
    shallowCompare
}


export default helper