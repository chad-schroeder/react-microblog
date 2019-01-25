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
    const { title, body, comments } = post;

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
            className="Post mb-3 p-4 pb-4 bg-white"
            style={{ borderTop: '4px solid #444' }}
          >
            <div className="media">
              <div className="media-body">
                <p
                  className="mb-0 text-muted text-uppercase"
                  style={{ fontSize: '0.85rem' }}
                >
                  Post
                </p>
                <h1
                  className="mb-4 h2"
                  style={{ fontSize: '1.8rem', fontWeight: 600 }}
                >
                  {title}
                </h1>
              </div>
              <div className="ml-3 align-self-center">
                <div className="btn-group" role="group">
                  <button
                    className="btn btn-white px-3 text-primary"
                    style={{ borderColor: '#dee2e6' }}
                    onClick={this.handleEdit}
                  >
                    <FontAwesomeIcon icon="edit" />
                  </button>
                  <button
                    className="btn btn-white text-danger px-3"
                    style={{ borderColor: '#dee2e6' }}
                    onClick={this.deletePost}
                  >
                    <FontAwesomeIcon icon="times" />
                  </button>
                </div>
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
