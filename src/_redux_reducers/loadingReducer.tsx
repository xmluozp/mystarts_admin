import { LOADING as CONST } from '_redux_constants'

export default (state = {}, action: any) => {
    switch (action.type) {
        case CONST.LOADING:
            return { ...state, status: 'loading' }
        case CONST.SUCCESS:
            return { ...state, status: 'success' }
        case CONST.FAILURE:
            return { ...state, status: 'failure' }
        case CONST.CLEAR:
            return { ...state, status: 'clear' }

        default:
            return state;
    }
}