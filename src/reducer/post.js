const defaultState = {
  image: null,
  tags: null,
  data: null
};

const SpinnerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_IMAGE":
      return {
        ...state,
        image: action.payload
      };
    case "SET_POSTS":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default SpinnerReducer;
