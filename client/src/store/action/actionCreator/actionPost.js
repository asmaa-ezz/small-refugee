import { GET_ALL_SUBJECT, ADD_POST, GET_POSTS, GET_POSTS_PROFILE } from '../actionTypes';

export const GetToken = () => {
  const jwt = localStorage.getItem("token");
  return jwt;
}

export const GetAllSubject = () => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://small-refugee-app.herokuapp.com/main/subject/';

  const Token = GetToken();

  fetch((proxyurl + url), {
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
  })
    .then(res => res.json())
    .then(listSubject => {
      dispatch({
        type: GET_ALL_SUBJECT,
        payload: listSubject
      })
    })
};

export const AddPost = data => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://small-refugee-app.herokuapp.com/';

  const Token = GetToken();

  fetch((proxyurl + url), {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(dataOfPost => {
      dispatch({
        type: ADD_POST,
        payload: dataOfPost
      })
    })
};
