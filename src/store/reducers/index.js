import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import lessonReducer from './lessonReducer';
import quizReducer from './quizReducer';

export default combineReducers({
  auth: authReducer,
  post: postReducer,
  lesson: lessonReducer,
  quiz: quizReducer,
})