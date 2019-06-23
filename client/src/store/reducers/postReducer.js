const initState = {
  posts: {}
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_ALL_SUBJECT':
      return {
        ...state,
        subject: action.payload,
      };
    case 'ADD_POST':
      return {
        ...state,
        newPost: action.payload,
      };
    default: return state;
  }
};

export default postReducer;