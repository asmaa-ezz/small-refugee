import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import lessonReducer from './lessonReducer';

export default combineReducers({
  auth: authReducer,
  post: postReducer,
  lesson: lessonReducer,
})