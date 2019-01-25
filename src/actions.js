import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './action-types';

export function add_post(data) {
  return {
    type: ADD_POST,
    payload: data
  };
}

export function edit_post() {
  return { type: EDIT_POST };
}

export function delete_post(id) {
  return { type: DELETE_POST, payload: id };
}

export function add_comment(comment_id) {
  return { type: ADD_COMMENT, payload: comment_id };
}

export function delete_comment(comment_id) {
  return { type: DELETE_COMMENT, payload: comment_id };
}
