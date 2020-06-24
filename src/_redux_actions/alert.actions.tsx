import { ALERT } from '_redux_constants';

// TODO: 
//  differential the "call from views" and "call from other actions"

export const alertActions = {
    success,
    error,
    notify,
    clear,
    info,
    dispatchNotify,
    dispatchClear,
    dispatchInfo,
};

function success(message: any) {
    return { type: ALERT.SUCCESS, message }
}

function error(message: any) {
    return { type: ALERT.ERROR, message }
}

function notify(message: any) {
    return { type: ALERT.NOTIFY, message }
}
function info(message: any) {
    return { type: ALERT.INFO, message }
}

function clear() {
    return { type: ALERT.CLEAR }
}

function dispatchClear() {
    return (dispatch: Function) => {
        dispatch({ type: ALERT.CLEAR })
    }
}

function dispatchInfo(message: any) {
    return (dispatch: Function) => {
        dispatch({ type: ALERT.INFO, message })
    }
}

function dispatchNotify(message: any) {
    return (dispatch: Function) => {
        dispatch({ type: ALERT.NOTIFY, message })
    }
}