import { GET_UNITS, GET_LESSONS } from '../actionTypes';
import { API } from '../confic'

export const GetToken = () => {
  const jwt = localStorage.getItem("token");
  return jwt;
}

export const GetAllUnits = id => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}/main/subject/${id}`;

  const Token = GetToken();

  fetch((proxyurl + url), {
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
    body: JSON.stringify()
  })
    .then(res => res.json())
    .then(units => {
      dispatch({
        type: GET_UNITS,
        payload: units
      })
    })
};

export const GetLessons = id => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}/main/unit/${id}`;

  const Token = GetToken();

  fetch((proxyurl + url), {
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
    body: JSON.stringify()
  })
    .then(res => res.json())
    .then(lessons => {
      dispatch({
        type: GET_LESSONS,
        payload: lessons
      })
    })
};

