/** ==========================================================================
 * THIS PAGE: generate reuseable redux const
 */

const constMaker = (constPrefix: String = "FACELESS") => {

  const CONST = {
    CLEAR:   constPrefix + "_CLEAR",
    CLEARLIST:   constPrefix + "_CLEARLIST",

    GETLIST_SUCCESS: constPrefix + "_GETLIST_SUCCESS",
    GETBYSEARCH_SUCCESS: constPrefix + "_GETBYSEARCH_SUCCESS",
    GET_SUCCESS: constPrefix + "_GET_SUCCESS",
    UPDATE_SUCCESS: constPrefix + "_UPDATE_SUCCESS",
    UPDATE_FAILURE: constPrefix + "_UPDATE_FAILURE",
    CREATE_SUCCESS: constPrefix + "_CREATE_SUCCESS",
    CREATE_FAILURE: constPrefix + "_CREATE_FAILURE",
    DELETE_SUCCESS: constPrefix + "_DELETE_SUCCESS",
    DELETE_FAILURE: constPrefix + "_DELETE_FAILURE",
  }

  return CONST;
}

export default constMaker