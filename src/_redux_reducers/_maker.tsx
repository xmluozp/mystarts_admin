/** ==========================================================================
 * THIS PAGE: generate reuseable reducers
 */
// import MT from '_dataModel'

const reducerMaker = (constOutside: Object, constPrefix: String = "FACELESS") => {

  let CONST: any;
  const defaultState = {
    pagination: {
      pages: [],
      pageIndex: 0
    },
    data: {
      list: []
    },
    dataGet:{}
  }

  if (constOutside) {
    CONST = constOutside;
  } else {
    CONST = {
      CLEAR: constPrefix + "CLEAR",
      CLEARLIST: constPrefix + "CLEARLIST",
      GETLIST_SUCCESS: constPrefix + "_GETLIST_SUCCESS",
      // GETBYSEARCH: constPrefix + "_GETBYSEARCH",
      // GETBYSEARCH_SUCCESS: constPrefix + "_GETBYSEARCH_SUCCESS",
      GET_SUCCESS: constPrefix + "_GET_SUCCESS",
      UPDATE_SUCCESS: constPrefix + "_UPDATE_SUCCESS",
      UPDATE_FAILURE: constPrefix + "_UPDATE_FAILURE",
      CREATE_SUCCESS: constPrefix + "_CREATE_SUCCESS",
      CREATE_FAILURE: constPrefix + "_CREATE_FAILURE",
      // DELETE_SUCCESS: constPrefix + "_DELETE_SUCCESS",
      // DELETE_FAILURE: constPrefix + "_DELETE_FAILURE",
    }
  }

  return (state: any = defaultState, action: any) => {

    switch (action.type) {
      case CONST.CLEAR:
        return { ...state, dataGet: {} };
      case CONST.CLEARLIST:
        // not clears pagination, in case of page back
        return { ...state, data: {} };
      case CONST.GETLIST_SUCCESS:
        return reducerGetListSuccess(state, action.payload);

      // case CONST.GETBYSEARCH_SUCCESS:
      // // filter: regenerate pagination
      //   return { ...state, data: action.payload, pagination: defaultPagination};
      case CONST.GET_SUCCESS:
        return { ...state, dataGet: action.payload};
      case CONST.UPDATE_SUCCESS:
        return reducerUpdateSuccess(state, action.payload);
      case CONST.UPDATE_FAILURE:
        return { ...state, dataGet: action.payload}; // error message included
      case CONST.CREATE_SUCCESS:
        return { ...state, dataGet: action.payload}; // jump to a new page (edit or create page)
      case CONST.CREATE_FAILURE:
        return { ...state, dataGet: action.payload }; // error message included
      case CONST.DELETE_SUCCESS:
        return reducerDeleteSuccess(state, action.payload);
      case CONST.DELETE_FAILURE:
        return state;
      default:
        return state;
    }
  };
}


const reducerGetListSuccess = (state, payload) => {

  const data = payload

  // ============== pagination: update the idx:token array (
  const p = state.pagination

  // cut out pages after nextToken
  const toPage:number = parseInt(data.pageIndex) || 0
  p.pages = p.pages.slice(0, toPage)

  // if needs pages
  if (data.nextToken) {
      // p.pages[toPage + 1] = data.nextToken
      p.pages.push(data.nextToken)
  }

  p.pageIndex = toPage <= p.pages.length? toPage : p.pages.length;
  // ============== pagination: update the idx:token array )

  return { ...state, data: payload, pagination: p};

}

const reducerUpdateSuccess = (state, payload) => {

  /* check if it needs to update the whole list
    (in case of directly modify from list). 
    if it doesn't, then just update current item. */
  const {list, ...rest} = state.data
  if(!list || list.length === 0) return { ...state, dataGet: payload}

  const updatedId = payload.item.id;
  const idx = list.findIndex(olditem => olditem.id === updatedId)
  const newData = {
    list: [...list.slice(0, idx), payload.item, ...list.slice(idx+1)], ...rest
  }
  return { ...state, dataGet: payload, data: newData};
}

const reducerDeleteSuccess = (state, payload) => {
  const deletedId = payload.item.id
  const {list, ...rest} = state.data
  const prevList = list.filter(
    item => item.id !== deletedId
  )
  return { ...state, data: {list:  [...prevList],...rest } };
}




export default reducerMaker