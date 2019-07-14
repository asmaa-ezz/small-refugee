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
    default:
      return state;
  }
}

export default lessonReducer;