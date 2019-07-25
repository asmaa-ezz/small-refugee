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
        posts: [action.payload, ...state.posts],
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
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(item => {
          return item.id !== action.payload
        }),
      }
    case 'EDIT_POST':
      return {
        ...state,
        posts: state.posts.map(item => {
          return (item.id === action.payload.id) ?
            { ...item, text: action.payload.text } : item
        }),
      }
    default: return state;
  }
};

export default postReducer;