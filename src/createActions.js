import axios from 'axios';

import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  GET_POSTS,
  DELETE_COMMENT
} from './actionTypes';

const BASE_URL = 'http://localhost:5000';

export function getPostsFromAPI() {
  return async function(dispatch) {
    const res = await axios.get(BASE_URL + '/api/posts');
    const posts = res.data;
    dispatch(getPosts(posts));
  };
}

export function addPost(data) {
  return {
    type: ADD_POST,
    payload: data
  };
}

//THUNK version
// export function getaddPost(data) {
//   console.log('Create actions addPost DATA is', data);
//   return async function(dispatch) {
//     const res = await axios.post(BASE_URL + '/api/');
//     const { id, title, description, body, votes } = res.data;
//     dispatch(addPost(id, title, description, body, votes));
//   };
// }

export function getPosts(data) {
  console.log('getPosts', data);
  return {
    type: GET_POSTS,
    payload: data
  };
}

export function editPost(data) {
  return {
    type: EDIT_POST,
    payload: data
  };
}

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
