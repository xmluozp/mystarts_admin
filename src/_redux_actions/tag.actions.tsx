/** ==========================================================================
 * THIS PAGE: could change to REST if needed
========================================================================== */
import {TAG as CONST } from "_redux_constants";
import { tagService as service} from "_redux_services";

import {
  actions,
} from "./_maker";

const {
  getList,
  getFirst,
  clearList,
  get,
  clear,
  update,
  create,
  _delete
} = actions(CONST, service)

export const tagActions = {
  getList,
  getFirst,
  clearList,
  get,
  clear,
  update,
  create,
  _delete
};
