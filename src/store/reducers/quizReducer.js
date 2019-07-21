const initState = {
};

const lessonReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_QUIZ':
      return {
        ...state,
        listQuiz: action.payload,
        quizNow: action.payload[0],
      }
    case 'OPEN_QUIZ':
      return {
        ...state,
        quizNow: state.listQuiz[action.payload - 1],
      }
    default:
      return state;
  }
}

export default lessonReducer;