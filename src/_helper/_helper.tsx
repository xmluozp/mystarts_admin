/** ==========================================================================
 * THIS PAGE: helper functions
 */
import {lazy as reactLazy} from "react";
import { createHashHistory } from 'history';
import {store} from './store'

// const history = createHashHistory({ forceRefresh: true });
const history = createHashHistory();
const authHeader = () => {
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
const lazy = (importpath: Promise<any>, callback?: Function) => {

    if(typeof(callback) !== 'function') {
        return reactLazy(()=>importpath)
    } else {
        return reactLazy(()=>importpath.then(m=> ({default: callback(m)})))
    }
}


 
const helper = {
    store,
    history,
    authHeader,
    lazy
}


export default helper