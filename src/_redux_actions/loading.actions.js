import { LOADING } from '_redux_constants';

export const loadingActions = {
    loading,
    success,
    error,
    clear
};

function loading() {
    return { type: LOADING.LOADING };
}

function success() {
    return { type: LOADING.SUCCESS };
}

function error() {
    return { type: LOADING.FAILURE };
}

function clear() {
    return { type: LOADING.CLEAR };
}