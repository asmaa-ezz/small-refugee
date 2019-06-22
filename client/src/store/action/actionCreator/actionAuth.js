import jwtDecode from "jwt-decode";
import { SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNOUT_SUCCESS, RESET_PASSWORD, DECODE_TOKEN } from '../actionTypes';

export const Login = dataUser => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://small-refugee-app.herokuapp.com/user/login/';

  fetch((proxyurl + url), {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(dataUser)
  })
    .then(res => res.json())
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
  const url = 'https://small-refugee-app.herokuapp.com/user/register/';

  fetch((proxyurl + url), {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(dataUser => {
      if (dataUser.error) {
        dispatch({
          type: SIGNUP_ERROR,
          error: dataUser.error
        })
      } else {
        window.location = '/sign-in';
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
  const url = 'https://small-refugee-app.herokuapp.com/user/resetPassword';

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