import { TAG as CONST } from "_redux_constants"

import maker from './_maker'

const standardReducer = maker(CONST);

export default (state = undefined, action: any) => {


    // ============================ override
    // switch (action.type) {
    //     case CONST.GETBYSEARCH_SUCCESS:
    //         return { ...state, xxx: action.payload };
    //     default:
    //         return state;
    // }


    return standardReducer(state, action)

}
