import toastr from "../component/Toastr";
import axios from "../util/axios";

export function getPosts(token) {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        method: "get",
        url: "/posts",
        headers: {
          Authorization: token
        }
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        dispatch({
          type: "SET_POSTS",
          payload: data.data
        });
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Get posts failed!", "Error")
    }
  };
}

export function getPost({ token, id }) {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        method: "get",
        url: "/posts/" + id,
        headers: {
          Authorization: token
        }
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        dispatch({
          type: "SET_USER_POSTS",
          payload: data.data
        });
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Get posts failed!", "Error")
    }
  };
}

export function addPost({token, post}) {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        method: "post",
        url: "/posts",
        headers: {
          Authorization: token
        },
        data: post
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        toastr.success("Create post success!", "Success")
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Create post failed!", "Error")
    }
  };
}

export function updatePost({token, update, id}) {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        method: "patch",
        url: "/posts/" + id,
        headers: {
          Authorization: token
        },
        data: update,
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        toastr.success("Update post success!", "Success")
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Update post failed!", "Error")
    }
  };
}

export function deletePost({ token, id}) {
  return async dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    try {
      const data = await axios({
        method: "patch",
        url: "/posts/" + id,
        headers: {
          Authorization: token
        },
      });
      dispatch({
        type: "CLOSE_LOADING"
      });
      if (data) {
        toastr.success("Delete post success!", "Success")
      }
    } catch (error) {
      dispatch({
        type: "CLOSE_LOADING"
      });
      toastr.error("Delete post failed!", "Error")
    }
  };
}

export function setNewImage(file) {
  return dispatch => {
    dispatch({
      type: "SET_IMAGE",
      payload: file
    });
  };
}
