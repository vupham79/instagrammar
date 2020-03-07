export function getPost() {
  return dispatch => {
    dispatch({
      type: "SHOW_LOADING"
    });
    dispatch({
      type: "SET_POST"
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
