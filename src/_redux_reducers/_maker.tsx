/** ==========================================================================
 * THIS PAGE: generate reuseable reducers
 */

const reducerMaker = (constOutside: Object, constPrefix: String = "FACELESS") => {

  let CONST: any;
  const defaultPagination = {
    pagination: {
      pages: [],
      pageIndex: 0
    }
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

  return (state: any = defaultPagination, action: any) => {
    switch (action.type) {
      case CONST.CLEAR:
        return { ...state, dataGet: {} };
      case CONST.CLEARLIST:
        // not clears pagination, in case of page back
        return { ...state, data: {} };
      case CONST.GETLIST_SUCCESS:
        const data = action.payload

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

        return { ...state, data: action.payload, pagination: p};

      // case CONST.GETBYSEARCH_SUCCESS:
      // // filter: regenerate pagination
      //   return { ...state, data: action.payload, pagination: defaultPagination};
      case CONST.GET_SUCCESS:
        return { ...state, dataGet: action.payload};
      case CONST.UPDATE_SUCCESS:
        return { ...state, dataGet: action.payload};
      case CONST.UPDATE_FAILURE:
        return { ...state, dataGet: action.payload}; // error message included
      case CONST.CREATE_SUCCESS:
        return { ...state, dataGet: action.payload}; // jump to a new page (edit or create page)
      case CONST.CREATE_FAILURE:
        return { ...state, dataGet: action.payload }; // error message included
      case CONST.DELETE_SUCCESS:
        const deletedId = action.payload.item.id
        const {list, ...rest} = state.data
        const prevList = list.filter(
          item => item.id !== deletedId
        )
        return { ...state, data: {list:  [...prevList],...rest } };
      case CONST.DELETE_FAILURE:
        return state;
      default:
        return state;
    }
  };
}
export default reducerMaker