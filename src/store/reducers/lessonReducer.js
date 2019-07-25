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
      const data = action.payload.lesson_set.filter(item => {
        return item.done === false;
      });
      return {
        ...state,
        lessons: action.payload,
        lessonNow: data[0] || action.payload.lesson_set[action.payload.lesson_set.length - 1],
        vidoOpen: action.payload.lesson_set[0].video
      }
    case 'CHANGE_LESSON_NOW':
      const newLesson = state.lessons.lesson_set.filter(item => {
        return item.id === action.payload
      });
      return {
        ...state,
        lessonNow: newLesson[0]
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
      console.log('reducer ', action.payload);

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