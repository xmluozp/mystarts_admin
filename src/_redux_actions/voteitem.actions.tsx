/** ==========================================================================
 * THIS PAGE: could change to REST if needed
========================================================================== */
import {VOTEITEM as CONST, VOTETOPIC } from "_redux_constants";
import { voteitemService as service} from "_redux_services";

import {
    actions,
  } from "./_maker";

  const {
    getList,
    getFirst,
    make_getNested,
    clearList,
    get,
    clear,
    update,
    create,
    _delete
  } = actions(CONST, service)

  export const voteitemActions = {
    getList,
    getFirst,
    getNested: make_getNested(VOTETOPIC),
    clearList,
    get,
    clear,
    update,
    create,
    _delete
  };
  