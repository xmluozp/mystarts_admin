import { AUTH } from "_redux_constants";
// import { userService as service } from "redux_services";
// import { history } from "_helper";
// import { 
// } from "./_maker";

// LOGIN ---------------------------------------------
function test() {
  return (dispatch: Function) => {
    dispatch({type: AUTH.TEST, data: "hello world" })
  }
}

const cacheIn = (userData: object) => {
  return (dispatch: Function) => {
    console.log("action cache in")
    dispatch({type: AUTH.LOGIN_SUCCESS, payload: userData })
  }
}

const cacheOut = () => {
  return { type: AUTH.LOGOUT };
}

// function login(userName?: String, password?: String) {
//   return (dispatch: Function) => {
//     dispatch(done({ userName }, AUTH.LOGIN));
//     // return service.login(userName, password).then(
//     //   response => {
//     //     dispatch(done(response, AUTH.LOGIN_SUCCESS));
//     //     history.push("/");
//     //   },
//     //   error => {

//     //     const errorInfo =error && error.info ? error.info : ""
//     //     dispatch(dispatch({ type: AUTH.LOGIN_FAILURE, message: errorInfo }));
//     //     dispatch(failure("Login Failed. " + errorInfo));
//     //   }
//     // );
//   };
// }

// LOGOUT ---------------------------------------------
// function logout() {
//   // service.logout();
//   return { type: AUTH.LOGOUT };
// }

// FETCH  ---------------------------------------------

export const authActions = {
  test,
  cacheIn,
  cacheOut,
};
