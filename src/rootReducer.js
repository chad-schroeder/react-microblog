import { ADD_POST } from './actionTypes';

const INITIAL_STATE = {
  posts: {
    '1': {
      id: 1,
      title: 'Hello, Redux!',
      description: 'Take some time to think about your Redux plan.',
      body: 'Make a plan before you start coding!',
      comments: {}
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

    default:
      return state;
  }
}
// end

export default rootReducer;
