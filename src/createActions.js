import { ADD_POST } from './actionTypes';

export function addPost(data) {
  return {
    type: ADD_POST,
    payload: data
  };
}
