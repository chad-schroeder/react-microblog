import {
  ADD_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';
const uuid = require('uuid/v4');

const INITIAL_STATE = {
  posts: {
    '1': {
      id: 1,
      title: 'Hello, Redux!',
      description: 'Take some time to think about your Redux plan.',
      body: 'Make a plan before you start coding!',
      comments: {
        '1': {
          id: 1,
          text:
            'When you add Redux-Thunk, you have to change the way you incorporate the dev tools into your store.'
        },
        '2': {
          id: 2,
          text: 'Take some time to think about your Redux plan'
        }
      }
    },
    '2': {
      id: 2,
      title: 'Goodbye, World!',
      description: 'Convert your app to Redux',
      body: 'Figure out which components should be connected!',
      comments: {}
    }
  },
  loading: false,
  error: false,
  postCounter: 3
};

function rootReducer(state = INITIAL_STATE, action) {
  console.log('reducer ran; state & action:', state, action);

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [state.postCounter]: {
            ...action.payload,
            id: state.postCounter,
            comments: {}
          }
        },
        postCounter: state.postCounter + 1
      };

    case DELETE_POST: {
      const posts = { ...state.posts };
      delete posts[action.payload];

      return {
        ...state,
        posts: posts
      };
    }

    case ADD_COMMENT:
      const { post_id, text } = action.payload;
      const posts = { ...state.posts };
      const post = posts[post_id];

      const comment_id = uuid();
      const comments = { ...post.comments };
      comments[comment_id] = { id: comment_id, text: text };

      post.comments = comments;

      return {
        ...state,
        posts: posts
      };

    case DELETE_COMMENT: {
      const { post_id, comment_id } = action.payload;

      // make copy of all posts; find the correct post
      const posts = { ...state.posts };
      const post = posts[post_id];

      // make copy of all comments; delete the comment
      const comments = { ...post.comments };
      delete comments[comment_id];

      // re-attach updated comments to correct post
      post.comments = comments;

      return {
        ...state,
        posts: posts
      };
    }

    default:
      return state;
  }
}
// end

export default rootReducer;
