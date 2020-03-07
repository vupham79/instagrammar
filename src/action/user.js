import toastr from "../component/Toastr";
import axios from "../util/axios";

export function login() {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    // const data = await axios({
    //   method: "post",
    //   url: "/auth",
    //   data: {
    //     username: username,
    //     password: password
    //   }
    // });
    dispatch({
      type: "SET_LOGIN"
    });
    dispatch({
      type: "CLOSE_LOADING"
    });
    // if (data.status === 200) {
    //   dispatch({
    //     type: "SET_LOGIN",
    //     payload: {}
    //   });
    // } else {
    //   toastr.error("Login failed! Please try again.", "Error");
    // }
  };
}

export function logout() {
  return dispatch => {
    dispatch({
      type: "SET_LOGOUT"
    });
  };
}
