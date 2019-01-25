import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './action-types';
import uuid from 'uuid';

const DEFAULT_STATE = {
  posts: {
    1: {
      id: uuid(),
      title: 'First Default Redux Title',
      description: 'First Default Redux Description',
      body: 'First Default Redux Body',
      comments: { 1: 'Default first Comment', 2: 'Default second comment' }
    },
    2: {
      id: uuid(),
      title: 'Second Default Redux Title',
      description: 'Second Default Redux Description',
      body: 'Second Default Redux Body',
      comments: { 1: 'Default first Comment', 2: 'Default second comment' }
    }
  },
  titles: [
    {
      id: uuid(),
      title: 'Default Redux DB title',
      description: 'Default Redux DB description'
    }
  ]
};

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [uuid()]: {
            title: action.payload.title,
            body: action.payload.body,
            description: action.payload.description
          }
        }
      };

    case EDIT_POST:
      return {};
    case DELETE_POST:
      return {};
    case ADD_COMMENT:
      return {};
    case DELETE_COMMENT:
      return {};
    default:
      return state;
  }
}

export default rootReducer;
