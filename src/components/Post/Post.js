import React, { Component } from 'react';
import CommentList from '../CommentList/CommentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewPostContainer from '../../containers/NewPostContainer';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };

    this.handleEdit = this.handleEdit.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  handleEdit() {
    this.setState({ isEditing: true });
  }

  deletePost() {
    this.props.deletePost(this.props.match.params.id);
    this.props.history.push('/');
  }

  addComment(comment) {
    const payload = { post_id: +this.props.match.params.id, text: comment };
    this.props.addComment(payload);
  }

  deleteComment(comment_id) {
    const payload = { post_id: +this.props.match.params.id, comment_id };
    this.props.deleteComment(payload);
  }

  render() {
    const post = this.props.posts[this.props.match.params.id];
    const { title, description, body, comments } = post;

    if (this.state.isEditing) {
      return (
        <NewPostContainer
          heading="Edit Post"
          isEditing={true}
          {...this.props}
          {...this.props.posts[this.props.match.params.id]}
        />
      );
    } else {
      return (
        <>
          <div
            className="Post p-3 pb-4 bg-white"
            style={{ borderTop: '3px solid #444' }}
          >
            <div className="media">
              <div className="media-body">
                <h1 className="mb-0 h2" style={{ fontWeight: 600 }}>
                  {title}
                </h1>
                <p className="text-muted">{description}</p>
              </div>
              <div className="ml-3 align-self-center">
                <button
                  className="btn btn-lg btn-link px-2"
                  onClick={this.handleEdit}
                >
                  <FontAwesomeIcon icon="edit" />
                </button>
                <button
                  className="btn btn-lg btn-link text-danger px-2"
                  onClick={this.deletePost}
                >
                  <FontAwesomeIcon icon="times" />
                </button>
              </div>
            </div>
            <p>{body}</p>
          </div>
          <CommentList
            comments={comments}
            addComment={this.addComment}
            deleteComment={this.deleteComment}
          />
        </>
      );
    }
  }
}

export default Post;
