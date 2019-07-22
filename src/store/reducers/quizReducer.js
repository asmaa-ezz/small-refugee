const initState = {
  quizAnswer: 0,
  // listQuiz
  // quizNow
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
    case 'ANSWER_QUIZ':
      const lastIndex = state.listQuiz.length;
      const indexProv = state.listQuiz.indexOf(state.quizNow);
      const isCorrect = action.payload;
      let newQ = state.quizNow;
      if ((indexProv + 1) !== lastIndex) {
        newQ = state.listQuiz[indexProv + 1]
      }
      return {
        ...state,
        quizAnswer: isCorrect ? state.quizAnswer + 1 : state.quizAnswer,
        listQuiz: state.listQuiz.map((item, index) => {
          return (item === state.quizNow) ?
            { ...item, answer: isCorrect }
            : item
        }),
        quizNow: newQ,
      }
    case 'DONE_TEST':
      const answerCorrect = state.quizAnswer;
      const Average = state.listQuiz.length / 2
      const isSuccessful = answerCorrect > Average;
      console.log('ddddddddd', isSuccessful);

      return {
        ...state,
        isSuccessful: isSuccessful,
        isDone: true
      }

    default:
      return state;
  }
}

export default lessonReducer;