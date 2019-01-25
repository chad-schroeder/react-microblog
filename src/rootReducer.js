import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';
const uuid = require('uuid/v4');

const INITIAL_STATE = {
  posts: {},
  loading: false,
  error: false,
  postCounter: 3,
  postsAPI: []
};

function rootReducer(state = INITIAL_STATE, action) {
  console.log('reducer ran; state & action:', state, action);

  switch (action.type) {
    case GET_POSTS: {
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

    case GET_POST: {
      // get post from payload
      const post = action.payload;
      // make copy of posts
      const posts = state.posts;
      // update/add post to posts
      state.posts[post.id] = post;

      return {
        ...state,
        posts: posts
      };
    }

    case ADD_POST: {
      const post = action.payload;

      return {
        ...state,
        posts: {
          ...state.posts,
          [post.id]: {
            ...post,
            comments: {}
          }
        },
        postCounter: state.postCounter + 1
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
      console.log('Reducer [DELETE_POST]', action.payload);

      const id = action.payload;
      // make copy of posts
      const posts = { ...state.posts };
      // delete post
      delete posts[id];

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
