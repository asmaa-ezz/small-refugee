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
      const { id, comments } = action.payload;

      // state.comments.forEach(item => {
      //   console.log(item);

      // })

      // return {
      //   // id, comments
      //   ...state,
      //   comments: [...state.comments, action.payload],
      // }
      return state;
    case 'GET_COMMENTS':

      return {
        ...state,
        comments: [...state.comments, action.payload],
      }
    default: return state;
  }
};

export default postReducer;