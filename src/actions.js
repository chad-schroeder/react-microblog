import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './action-types';

export function add_post() {
  return {
    type: ADD_POST,
    payload: data
  };
}

export function edit_post() {
  return { type: EDIT_POST };
}

export function delete_post() {
  return { type: DELETE_POST, payload: id };
}

export function add_comment() {
  return { type: ADD_COMMENT, payload: comment_id };
}

export function delete_comment() {
  return { type: DELETE_COMMENT, payload: comment_id };
}
