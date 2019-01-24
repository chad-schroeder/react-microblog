import {
  ADD_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

export function addPost(data) {
  return {
    type: ADD_POST,
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
