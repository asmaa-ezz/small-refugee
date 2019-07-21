const initState = {
};

const lessonReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_QUIZ':
      return {
        ...state,
        listQuiz: action.payload,
      }
    default:
      return state;
  }
}

export default lessonReducer;