export function getPost() {
  return dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    dispatch({
      type: "SET_POSTS"
    });
    dispatch({
      type: "CLOSE_LOADING"
    });
  };
}

export function addPost() {
  return dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    dispatch({
      type: "CLOSE_LOADING"
    });
  };
}

export function updatePost() {
  return dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    dispatch({
      type: "CLOSE_LOADING"
    });
  };
}

export function deletePost() {
  return dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    dispatch({
      type: "CLOSE_LOADING"
    });
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
