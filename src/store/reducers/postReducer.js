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
    case 'ADD_LIKE_POST':
      return {
        ...state,
        posts: state.posts.map(item => {
          return (item.id === action.payload.post) ?
            {
              ...item,
              is_liked: true,
              likes_count: item.likes_count + 1,
              like_id: action.payload.id
            } : item
        }),
      }
    case 'DELETE_LIKE_POST':
      return {
        ...state,
        posts: state.posts.map(item => {
          return (item.id === action.payload) ?
            { ...item, is_liked: false, likes_count: item.likes_count - 1 } : item
        }),
      }



    case 'DELETE_POST_COMMENT':
      const { idPost, idComment } = action.payload
      return {
        ...state,
        posts: state.posts.map(item => {
          if (item.id === idPost) {
            const newComment = item.comments.filter(element => {
              return element.id !== idComment
            })
            return { ...item, comments: newComment }
          } else {
            return item
          }
        })

      }
    case 'EDIT_POST_COMMENT':
      const { id, post_id, text } = action.payload
      return {
        ...state,
        posts: state.posts.map(item => {
          if (item.id === post_id) {
            const newComment = item.comments.map(element => {
              return element.id === id ? { ...element, text: text } : element
            })
            return { ...item, comments: newComment }
          } else {
            return item
          }
        })
      }
    case 'ADD_LIKE_POST_COMMENT':
      const like_id = action.payload.dataComment.id
      const { comment } = action.payload.dataComment
      return {
        ...state,
        posts: state.posts.map(item => {
          if (item.id === action.payload.idPost) {
            const newComment = item.comments.map(element => {
              return element.id === comment ? { ...element, is_liked: true, likes_count: element.likes_count + 1, like_id: like_id } : element
            })
            return { ...item, comments: newComment }
          } else {
            return item
          }
        })
      }
    case 'DELETE_LIKE_POST_COMMENT':
      return {
        ...state,
        posts: state.posts.map(item => {
          if (item.id === action.payload.idPost) {
            const newComment = item.comments.map(element => {
              return element.id === action.payload.idComment ? { ...element, is_liked: false, likes_count: element.likes_count - 1 } : element
            })
            return { ...item, comments: newComment }
          } else {
            return item
          }
        })
      }
    default: return state;
  }
};

export default postReducer;