import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import coursesReducer from './coursesReducer';
import topicsReducer from './topicsReducer';

export default combineReducers({
  form: reduxForm,
  courses: coursesReducer,
  topics: topicsReducer,
});
