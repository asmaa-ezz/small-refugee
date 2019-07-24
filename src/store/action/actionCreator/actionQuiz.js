import { GET_QUIZ, OPEN_QUIZ, ANSWER_QUIZ, DONE_TEST, END_TEST, GET_POSTS_LESSON } from '../actionTypes';
import { API } from '../confic'

export const GetToken = () => {
  const jwt = localStorage.getItem("token");
  return jwt;
}

export const GetQuiz = id => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}/test/${id}/question/`;

  const Token = GetToken();

  fetch((proxyurl + url), {
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
  })
    .then(res => res.json())
    .then(listQuiz => {
      listQuiz.map(item => {
        return (
          item.answer = ''
        )
      })

      dispatch({
        type: GET_QUIZ,
        payload: listQuiz
      })
    })
};

export const OpenNewQuiz = id => dispatch => {
  dispatch({
    type: OPEN_QUIZ,
    payload: id
  })
};

export const DoneTest = () => dispatch => {
  dispatch({
    type: DONE_TEST,
  })
};

export const AnswerQuiz = (testId, quizId, text) => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}/test/${testId}/question/${quizId}/answer/`;

  const Token = GetToken();

  const data = {
    text: text
  }

  fetch((proxyurl + url), {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(isCorrect => {
      dispatch({
        type: ANSWER_QUIZ,
        payload: isCorrect
      })
    })
};



export const FetchDoneTest = (lessonId) => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}/main/user-lesson/`;

  const Token = GetToken();

  const data = {
    lesson: lessonId,
    is_done: true
  }

  fetch((proxyurl + url), {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(object => {
      dispatch({
        type: END_TEST,
        payload: object.unit[0],
      })
    })
};
