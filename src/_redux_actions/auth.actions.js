import { AUTH } from "_redux_constants";
// import { userService as service } from "redux_services";
import { history } from "_helper";
import { done, failure } from "./_maker";

// LOGIN ---------------------------------------------
function test() {
  return dispatch => {
    dispatch({type: AUTH.TEST, data: "hello world" })
  }
}

function login(userName, password) {
  return dispatch => {
    dispatch(done({ userName }, AUTH.LOGIN));
    // return service.login(userName, password).then(
    //   response => {
    //     dispatch(done(response, AUTH.LOGIN_SUCCESS));
    //     history.push("/");
    //   },
    //   error => {

    //     const errorInfo =error && error.info ? error.info : ""
    //     dispatch(dispatch({ type: AUTH.LOGIN_FAILURE, message: errorInfo }));
    //     dispatch(failure("Login Failed. " + errorInfo));
    //   }
    // );
  };
}

// LOGOUT ---------------------------------------------
function logout() {
  // service.logout();
  return { type: AUTH.LOGOUT };
}

// FETCH  ---------------------------------------------

export const authActions = {
  test,
  login,
  logout,
};
