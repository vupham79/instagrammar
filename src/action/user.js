import toastr from "../component/Toastr";
import axios from "../util/axios";

export function login(email, password) {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        method: "post",
        url: "/users/login",
        data: {
          email: email,
          password: password
        }
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        dispatch({
          type: "SET_LOGIN"
        });
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Login failed! Please try again.", "Error");
    }
  };
}

export function signup(user) {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        method: "post",
        url: "/users",
        data: user
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        toastr.success("Signup success!", "Success");
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Signup failed! Try again!", "Error");
    }
  }
}

export function logout(token) {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        method: "post",
        url: "/users/logout",
        headers: {
          Authorization: token
        }
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        dispatch({
          type: "SET_LOGOUT"
        });
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Logout failed!", "Error");
    }
  }
}

export function logoutAll(token) {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        method: "post",
        url: "/users/logoutAll",
        headers: {
          Authorization: token
        }
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        dispatch({
          type: "SET_LOGOUT"
        });
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Logout failed!", "Error");
    }
  }
}

export function getMe(token) {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        method: "get",
        url: "/users/me",
        headers: {
          Authorization: token
        }
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        dispatch({
          type: "SET_USER",
          payload: data.data
        });
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Get data failed!", "Error");
    }
  }
}

export function updateMe({ token, displayName, email, password }) {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        method: "patch",
        url: "/users/me",
        headers: {
          Authorization: token
        },
        data: {
          displayName, email, password
        }
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        toastr.success("Update success!", "Success");
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Get data failed!", "Error");
    }
  }
}

export function deleteMe(token) {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        method: "delete",
        url: "/users/me",
        headers: {
          Authorization: token
        }
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        toastr.success("Delete success!", "Success");
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Delete failed!", "Error");
    }
  }
}

export function updateAvatar(token) {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        method: "post",
        url: "/users/me/avatar",
        headers: {
          Authorization: token
        },
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        toastr.success("Update avatar success!", "Success");
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Update avatar failed!", "Error");
    }
  }
}

export function deleteAvatar(token) {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        method: "delete",
        url: "/users/me/avatar",
        headers: {
          Authorization: token
        },
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        toastr.success("Delete avatar success!", "Success");
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Delete avatar failed!", "Error");
    }
  }
}

export function getAvatar(id) {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        method: "get",
        url: "/users/" + id + "/avatar",
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        dispatch({
          type: "SET_AVATAR",
          payload: data
        })
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Get user avatar failed!", "Error");
    }
  }
}

