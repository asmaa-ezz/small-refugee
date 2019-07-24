const initState = {
  posts: [],
  comments: [],
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
        posts: [...state.posts, action.payload],
      };
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.payload,
      }
    case 'ADD_COMMENT':
      return {
        ...state,
        posts: state.posts.map(item => {
          return (item.id === action.payload.id) ?
            { ...item, comments: [...item.comments, action.payload.comment] } : item
        }),
      }
    default: return state;
  }
};

export default postReducer;