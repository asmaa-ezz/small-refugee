const initState = {
  vidoOpen: ''
};

const lessonReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_UNITS':
      return {
        ...state,
        units: action.payload,
      }
    case 'GET_LESSONS':
      return {
        ...state,
        lessons: action.payload,
        vidoOpen: action.payload.video_set[0].link
      }
    case 'START_LESSON':
      return {
        ...state,
        vidoOpen: action.payload
      }
    case 'GET_POSTS_LESSON':
      return {
        ...state,
        listPostLesson: action.payload
      }
    case 'ADD_POST_LESSON':
      return {
        ...state,
        listPostLesson: [...state.listPostLesson, action.payload]
      }
    case 'ADD_COMMENT_LESSON':
      return {
        ...state,
        commentLesson: action.payload,
        listPostLesson: state.listPostLesson.map(item => {
          return (item.id === action.payload.lesson_post_id) ?
            { ...item, comments: [...item.comments, action.payload] } : item
        }),
      }
    default:
      return state;
  }
}

export default lessonReducer;