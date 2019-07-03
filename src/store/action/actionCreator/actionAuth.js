import jwtDecode from "jwt-decode";
import { SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNOUT_SUCCESS, RESET_PASSWORD, DECODE_TOKEN, DATA_USER } from '../actionTypes';
import { API } from '../confic'

export const GetToken = () => {
  const jwt = localStorage.getItem("token");
  return jwt;
}

export const Login = dataUser => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}user/login/`;

  fetch((proxyurl + url), {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(dataUser)
  })
    .then(res => {
      return res.json()
    })
    .then(dataUser => {
      if (dataUser.error) {
        dispatch({
          type: SIGNIN_ERROR,
          error: dataUser.error
        })
      } else {
        const { token: jwt } = dataUser;
        localStorage.setItem("token", jwt);
        window.location = '/';
        dispatch({
          type: SIGNIN_SUCCESS,
          payload: dataUser
        })
      }
    })
    .catch(err => {
      dispatch({
        type: SIGNIN_ERROR,
        error: err
      })
    });
};

export const Register = data => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}/user/register/`;

  fetch((proxyurl + url), {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      return res.json()
    })

    .then(dataUser => {
      if (dataUser.error) {
        dispatch({
          type: SIGNUP_ERROR,
          error: dataUser.error
        })
      } else {
        const { token: jwt } = dataUser;
        localStorage.setItem("token", jwt);
        window.location = '/';
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: data
        })
      }
    })
    .catch(err => {
      dispatch({
        type: SIGNUP_ERROR,
        error: err
      })
    });
};

export const LogOutRemoveToken = () => dispatch => {
  localStorage.removeItem("token");
  window.location = "/";
  dispatch({
    type: SIGNOUT_SUCCESS,
    payload: null
  })
};

export const DecodeToken = () => dispatch => {
  try {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    dispatch({
      type: DECODE_TOKEN,
      payload: user
    })
  } catch (ex) { }

};

export const resetPasswordSendEmail = data => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}/user/resetPassword`;

  fetch((proxyurl + url), {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(massege => {
      dispatch({
        type: RESET_PASSWORD,
        payload: massege
      })
    })
}

export const GetDataUser = () => dispatch => {

  try {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    const { user_id } = user;

    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url = `${API}/user/${user_id}`;

    fetch((proxyurl + url), {
      headers: {
        'content-type': 'application/json',
        "Authorization": `JWT ${jwt}`,
      },
      body: JSON.stringify()
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: DATA_USER,
          payload: data
        })
      })

  } catch (ex) { };

};