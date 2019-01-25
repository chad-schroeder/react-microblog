import {
  GET_POSTS,
  ADD_POST,
  EDIT_POST,
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
  postCounter: 3,
  postsAPI: []
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

    case GET_POSTS: {
      console.log('GET POSTS', action.payload);

      const posts = action.payload;

      // refactor array of post data into post object
      const post = posts.reduce((tally, post) => {
        tally[post.id] = { ...post };
        return tally;
      }, {});

      return {
        ...state,
        posts: post,
        postsAPI: posts
      };
    }

    case EDIT_POST: {
      const { id, title, description, body } = action.payload;

      // make copy of posts
      const posts = { ...state.posts };

      // update specific post
      posts[id] = {
        id,
        title,
        description,
        body,
        comments: posts[id].comments
      };

      return {
        ...state,
        posts: posts
      };
    }

    case DELETE_POST: {
      // make copy of posts
      const posts = { ...state.posts };
      // delete post
      delete posts[action.payload];

      return {
        ...state,
        posts: posts
      };
    }

    case ADD_COMMENT:
      const { post_id, text } = action.payload;

      // make copy of comments; find specific comment
      const posts = { ...state.posts };
      const post = posts[post_id];

      // generate random id
      const comment_id = uuid();

      // make copy of comments; add comment to comments
      const comments = { ...post.comments };
      comments[comment_id] = { id: comment_id, text: text };

      // add updated comments to post
      post.comments = comments;

      return {
        ...state,
        posts: posts
      };

    case DELETE_COMMENT: {
      const { post_id, comment_id } = action.payload;

      // make copy of posts; find specific post
      const posts = { ...state.posts };
      const post = posts[post_id];

      // make copy of comments; delete comment
      const comments = { ...post.comments };
      delete comments[comment_id];

      // add updated comments to post
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
