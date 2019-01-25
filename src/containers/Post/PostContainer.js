import React, { Component } from 'react';
import CommentList from '../../components/CommentList/CommentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostForm from '../../components/PostForm/PostForm';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  handleEdit() {
    this.setState({ isEditing: true });
  }

  handleDelete() {
    this.props.deletePost(this.props.postInfo.id);
    this.props.history.push('/');
  }

  addComment(comment) {
    this.props.addComment(this.props.postInfo.id, comment);
  }

  deleteComment(id) {
    this.props.deleteComment(this.props.postInfo.id, id);
  }

  render() {
    const { title, description, body, comments } = this.props.postInfo;

    if (this.state.isEditing) {
      return (
        <PostForm
          fields={this.props.postInfo}
          addPost={this.props.addPost}
          {...this.props}
        />
      );
    } else {
      return (
        <>
          <div
            className="Post p-3 bg-white"
            style={{ borderTop: '3px solid #444' }}
          >
            <div className="media">
              <div className="media-body">
                <h1 className="mb-1 h2" style={{ fontWeight: 600 }}>
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
                  onClick={this.handleDelete}
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
