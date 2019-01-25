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
            className="Post mb-0 p-4 bg-white"
            style={{
              borderTop: '4px solid #444',
              borderBottom: '1px solid #d5d5d5'
            }}
          >
            <p
              className="mb-0 text-muted text-uppercase"
              style={{ fontSize: '0.85rem' }}
            >
              Post
            </p>
            <h1
              className="mb-3 h2"
              style={{ fontSize: '1.8rem', fontWeight: 600 }}
            >
              {title}
            </h1>
            <p>{body}</p>
          </div>

          <div
            className="d-flex justify-content-between mb-3 py-2 px-4"
            style={{ backgroundColor: 'rgb(233, 236, 239)' }}
          >
            <div className="btn-group" role="group">
              <button
                className="btn btn-link px-3 text-primary"
                style={{ width: '40px' }}
                onClick={this.handleEdit}
              >
                <FontAwesomeIcon icon="edit" />
              </button>
              <button
                className="btn btn-link text-danger px-3"
                style={{ width: '40px' }}
                onClick={this.deletePost}
              >
                <FontAwesomeIcon icon="times" />
              </button>
            </div>
            {/* up/down votes */}
            <div className="d-flex align-items-center">
              <p className="m-0">
                <strong>0</strong> votes
              </p>
              <div className="btn-group" role="group">
                <button
                  className="btn btn-link px-3 text-primary"
                  style={{ width: '40px' }}
                >
                  <FontAwesomeIcon icon="thumbs-up" />
                </button>
                <button
                  className="btn btn-link text-danger px-3"
                  style={{ width: '40px' }}
                >
                  <FontAwesomeIcon icon="thumbs-down" />
                </button>
              </div>
            </div>
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
