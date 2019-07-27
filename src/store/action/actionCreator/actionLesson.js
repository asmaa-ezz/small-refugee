import { GET_UNITS, GET_LESSONS, START_LESSON, GET_POSTS_LESSON, ADD_POST_LESSON, ADD_COMMENT_LESSON, CHANGE_LESSON_NOW } from '../actionTypes';
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
      lessons.lesson_set.map(item => {
        return (
          item.isView = false
        )
      })

      dispatch({
        type: GET_LESSONS,
        payload: lessons
      })
    })
};

export const OpenLessonClikButton = data => dispatch => {
  dispatch({
    type: START_LESSON,
    payload: data
  })

};

export const GetPostLesson = (id) => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}/main/lesson/${id}/post/`;

  const Token = GetToken();

  fetch((proxyurl + url), {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      "Authorization": `JWT ${Token}`,
    },
  })
    .then(res => res.json())
    .then(postsLesson => {
      dispatch({
        type: GET_POSTS_LESSON,
        payload: postsLesson,
      })
    })
};

export const AddPostLesson = (text, id) => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}main/post/`;

  const Token = GetToken();

  const data = {
    text: text,
    lesson: id
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
    .then(newPost => {
      dispatch({
        type: ADD_POST_LESSON,
        payload: newPost
      })
    })
};


export const AddCommentPostLesson = data => dispatch => {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${API}main/comment/`;

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
    .then(newCommet => {

      dispatch({
        type: ADD_COMMENT_LESSON,
        payload: newCommet
      })
    })
};

export const ChangeLessonNow = id => dispatch => {

  dispatch({
    type: CHANGE_LESSON_NOW,
    payload: id
  })

};

