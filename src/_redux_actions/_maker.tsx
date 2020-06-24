/** ==========================================================================
 * THIS PAGE: generate reuseable actions
 */
import { LOADING } from "_redux_constants";
import { alertActions } from ".";

export const done = (payload: any, type: String) => {
    return { type: type, payload };
  };

  export const failure = (payload:any) => {
    return alertActions.error(payload);
  };
  export const success = (payload:any) => {
    return alertActions.success(payload);
  };
  export const loading = { type: LOADING.LOADING };
  export const loaded = { type: LOADING.SUCCESS };
  export const loadedFailure = { type: LOADING.FAILURE };