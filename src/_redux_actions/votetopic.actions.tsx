/** ==========================================================================
 * THIS PAGE: could change to REST if needed
========================================================================== */
import {VOTETOPIC as CONST } from "_redux_constants";
import { votetopicService as service} from "_redux_services";

import {
    actions,
  } from "./_maker";

  const {
    getList,
    clearList,
    get,
    clear,
    update,
    create,
    _delete
  } = actions(CONST, service)

  export const votetopicActions = {
    getList,
    clearList,
    get,
    clear,
    update,
    create,
    _delete
  };
  