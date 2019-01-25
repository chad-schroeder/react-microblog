import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from '../../components/CommentList/CommentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostForm from '../../components/PostForm/PostForm';
import {
  edit_post,
  delete_post,
  delete_comment,
  add_comment,
  add_post
} from '../../actions';
import Post from '../../components/Post/Post';

class PostContainer extends Component {
  render() {
    return <Post {...this.props} />;
  }
}

//State.posts below got the state data into this Component
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  { edit_post, delete_post, delete_comment, add_comment, add_post }
)(PostContainer);

// const getPost = props => {
//   const post = this.props.posts.find(
//     post => post.id === +props.match.params.id
//   );
//   return (
//     <PostContainer
//       postInfo={post}
//       addPost={this.props.addPost}
//       deletePost={this.props.deletePost}
//       addComment={this.props.addComment}
//       deleteComment={this.props.deleteComment}
//       {...props}
//     />
//   );
// };

// return (
//   <PostContainer
//     postInfo={post}
//     addPost={this.props.addPost}
//     deletePost={this.props.deletePost}
//     addComment={this.props.addComment}
//     deleteComment={this.props.deleteComment}
//     {...props}
//   />
// );
// };
