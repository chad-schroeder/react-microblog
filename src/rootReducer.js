import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './action-types';
import uuid from './uuid';

const DEFAULT_STATE = {
  posts: {
    1: {
      id: uuid(),
      title: 'Default Redux Title',
      description: 'Default Redux Description',
      body: 'Default Redux Body',
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
    case ADD_POST: {
    }
    case EDIT_POST: {
    }
    case DELETE_POST: {
    }
    case ADD_COMMENT: {
    }
    case DELETE_COMMENT: {
    }
  }
}

export default rootReducer;
