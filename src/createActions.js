import axios from 'axios';

import {
  ADD_POST,
  GET_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  GET_POSTS,
  DELETE_COMMENT
} from './actionTypes';

const BASE_URL = 'http://localhost:5000';

/* Get all posts from API */

export function getPostsFromAPI() {
  return async function(dispatch) {
    const res = await axios.get(BASE_URL + '/api/posts');
    const posts = res.data;
    dispatch(getPosts(posts));
  };
}

export function getPosts(data) {
  return {
    type: GET_POSTS,
    payload: data
  };
}

/* Get post from API */

export function getPostFromAPI(id) {
  return async function(dispatch) {
    const res = await axios.get(`${BASE_URL}/api/posts/${id}`);
    const post = res.data;
    dispatch(getPost(post));
  };
}

export function getPost(post) {
  return {
    type: GET_POST,
    payload: post
  };
}

/* Add post to API */

export function addPostToAPI(data) {
  return async function(dispatch) {
    const res = await axios.post(`${BASE_URL}/api/posts`, data);
    const post = res.data;
    dispatch(addPost(post));
  };
}

export function addPost(data) {
  return {
    type: ADD_POST,
    payload: data
  };
}

/* Edit post in API */

export function editPost(data) {
  return {
    type: EDIT_POST,
    payload: data
  };
}

/* Delete post from API */

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: id
  };
}

export function addComment(id) {
  return {
    type: ADD_COMMENT,
    payload: id
  };
}

export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    payload: id
  };
}
