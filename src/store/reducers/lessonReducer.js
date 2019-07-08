const initState = {
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
      }
    default:
      return state;
  }
}

export default lessonReducer;