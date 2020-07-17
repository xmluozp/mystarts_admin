/** ==========================================================================
 * THIS PAGE: basic CRUD actions and dispatches
========================================================================== */
import { LOADING } from "_redux_constants";
import { alertError } from '_helper'

// export const done = (payload: any, type: String) => {
//   return { type: type, payload };
// };


// import { alertActions } from ".";
// export const failure = (payload: any) => {
//   return alertActions.error(payload);
// };
// export const success = (payload: any) => {
//   return alertActions.success(payload);
// };

export const actions = (CONST: any, service: any) => {

  const p_getList = async (dispatch: Function, variables: any, pageIndex: number) => {
    try {

      dispatch({ type: LOADING.LOADING });
      dispatch({ type: CONST.CLEARLIST });

      // TODO: 前端pagination，如果发现idx对应不到nextToken的时候(undefined)，应该重新生成[token] 索引表
      // 如果是null，就是取第一页
      const res: any = await service.getList(variables)
      dispatch({ type: LOADING.SUCCESS });
      dispatch({
        type: CONST.GETLIST_SUCCESS, payload: {
          ...res,
          pageIndex
        }
      });
      return res
    } catch (err) {
      console.error("Error getlist action,", err)
      dispatch({ type: LOADING.FAILURE });
      const errorInfo = err && err.error ? err.error : "Error when getting list. "
      alertError(errorInfo.toString())
      return Promise.reject()
    }
  }

  const getList = (variables: any, pageIndex: number) => {
    return (dispatch: Function) => {
      return p_getList(dispatch, variables, pageIndex)
    }
  }

  const get = (id) => {
    return async (dispatch: Function) => {

      try {
        dispatch({ type: LOADING.LOADING });
        dispatch({ type: CONST.CLEAR });

        const res: any = await service.get(id)
        dispatch({ type: LOADING.SUCCESS });
        dispatch({ type: CONST.GET_SUCCESS, payload: res });
        return res
      } catch (err) {
        console.error("Error get action,", err)
        dispatch({ type: LOADING.FAILURE });
        const errorInfo = err && err.error ? err.error : "Error when getting record. "
        alertError(errorInfo.toString())
        return Promise.reject()
      }
    }
  }

  const getFirst = (pk) => {
    return async (dispatch: Function) => {

      try {
        dispatch({ type: LOADING.LOADING });
        dispatch({ type: CONST.CLEAR });

        const res: any = await service.getFirst(pk)
        dispatch({ type: LOADING.SUCCESS });
        dispatch({ type: CONST.GET_SUCCESS, payload: res });
        return res
      } catch (err) {
        console.error("Error get action,", err)
        dispatch({ type: LOADING.FAILURE });
        const errorInfo = err && err.error ? err.error : "Error when getting record. "
        alertError(errorInfo.toString())
        return Promise.reject()
      }
    }
  }

  const update = (data) => {
    return async (dispatch: Function) => {
      try {
        dispatch({ type: LOADING.LOADING });

        const res: any = await service.update(data)

        dispatch({ type: LOADING.SUCCESS });
        dispatch({ type: CONST.UPDATE_SUCCESS, payload: res });
        return res
      } catch (err) {

        console.error("Error update action,", err)

        dispatch({ type: LOADING.FAILURE });
        const errors = (err && err.error && err.error.errors) || [err.toString()]
        let errorInfo = "Error when update. ";
        for (let i = 0; i < errors.length; i++) {
          errorInfo += `${errors[i].message}`
        }
        alertError(errorInfo, { duration: 0 })
        return Promise.reject()
      }
    }
  }

  const create = (data) => {
    return async (dispatch: Function) => {
      try {
        dispatch({ type: LOADING.LOADING });

        const res: any = await service.create(data)

        dispatch({ type: LOADING.SUCCESS });
        dispatch({ type: CONST.CREATE_SUCCESS, payload: res });

        return res
      } catch (err) {

        console.error("Error create action,", err)
        dispatch({ type: LOADING.FAILURE });

        const errors = (err && err.error && err.error.errors) || [err.toString()]

        let errorInfo = "Error when create. ";

        for (let i = 0; i < errors.length; i++) {
          errorInfo += `${errors[i].message}`
        }

        alertError(errorInfo, { duration: 0 })
        return Promise.reject()
      }
    }
  }

  const clearList = () => {
    return async (dispatch: Function) => {
      dispatch({ type: CONST.CLEARLIST })
    }
  }

  const clear = () => {
    return async (dispatch: Function) => {
      dispatch({ type: CONST.CLEAR })
    }
  }

  const _delete = (id, ...params) => {
    return async (dispatch: Function) => {
      try {
        dispatch({ type: LOADING.LOADING });

        const res: any = await service._delete(id, ...params)
        dispatch({ type: LOADING.SUCCESS });
        dispatch({ type: CONST.DELETE_SUCCESS, payload: res });
        return res
      } catch (err) {

        console.error("Error delete action,", err)

        dispatch({ type: LOADING.FAILURE });

        const errors = (err && err.error && err.error.errors) || [err.toString()]
        let errorInfo = "Error when delete. ";
        for (let i = 0; i < errors.length; i++) {
          errorInfo += `${errors[i].message}`
        }
        alertError(errorInfo, { duration: 0 })
        return Promise.reject()
      }
    }
  }

  const make_getNested = (parent) => (variables: any, pageIndex: number) => {

    return async (dispatch: Function) => {
      try {

        dispatch({ type: LOADING.LOADING });
        dispatch({ type: CONST.CLEARLIST });

        const res: any = await service.getNested(variables)
        const { nestedList } = res

        dispatch({ type: parent.GET_SUCCESS, payload: res });
        dispatch({
          type: CONST.GETLIST_SUCCESS, payload: {
            ...nestedList,
            pageIndex
          }
        });

        dispatch({ type: LOADING.SUCCESS });
        return res
      } catch (err) {
        console.error("Error getNested action,", err)
        dispatch({ type: LOADING.FAILURE });
        const errorInfo = err && err.error ? err.error : "Error when getting nested list. "
        alertError(errorInfo.toString())
        return Promise.reject()
      }
    }

  }


  return {
    getList,
    getFirst,
    clearList,
    get,
    clear,
    update,
    create,
    _delete,

    //------------ maker:Function
    make_getNested,

  }
}