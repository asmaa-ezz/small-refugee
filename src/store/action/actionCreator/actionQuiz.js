import { GET_QUIZ, OPEN_QUIZ } from '../actionTypes';
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

