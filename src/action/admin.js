import toastr from "../component/Toastr";
import axios from "../util/axios";

export function getAllUsers() {
  return async dispatch => {
    try {
      const data = await axios({
        method: "get",
        url: "/users",
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        dispatch({
          type: "SET_USERS",
          payload: data.data
        });
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Get all users failed!", "Error");
    }
  }
}