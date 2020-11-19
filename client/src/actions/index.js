import axios from 'axios';
import {
  FETCH_COURSES,
  ADD_COURSES,
  DELETE_COURSES,
  UPDATE_COURSES,
  FETCH_TOPICS,
  ADD_TOPICS,
  DELETE_TOPICS,
  UPDATE_TOPICS,
} from './types';

// Actions for Course
export const fetchCourses = () => async (dispatch) => {
  const res = await axios.get('/api/courses');

  dispatch({ type: FETCH_COURSES, payload: res.data });
};

export const submitCourse = (course) => async (dispatch) => {
  const res = await axios.post('/api/courses/new', course);

  dispatch({ type: ADD_COURSES, payload: res.data });
};

export const deleteCourse = (_id) => async (dispatch) => {
  const res = await axios.delete('/api/courses/delete/' + _id);

  dispatch({ type: DELETE_COURSES, payload: res.data });
};

export const updateCourse = (_id, course) => async (dispatch) => {
  const res = await axios.post('/api/courses/update/' + _id, course);

  dispatch({ type: UPDATE_COURSES, payload: res.data });
};

// Actions for Topics
export const fetchTopics = (_id) => async (dispatch) => {
  const res = await axios.get('/api/topics/' + _id);

  dispatch({ type: FETCH_TOPICS, payload: res.data });
};

export const submitTopic = (topic) => async (dispatch) => {
  const res = await axios.post('/api/topics/new', topic);

  dispatch({ type: ADD_TOPICS, payload: res.data });
};

export const deleteTopic = (topic) => async (dispatch) => {
  const res = await axios.delete(
    `/api/topics/delete/${topic._id}/${topic._course}`
  );

  dispatch({ type: DELETE_TOPICS, payload: res.data });
};

export const updateTopic = (topic) => async (dispatch) => {
  const res = await axios.post(
    `/api/topics/update/${topic._id}/${topic._course}`
  );

  dispatch({ type: UPDATE_TOPICS, payload: res.data });
};
