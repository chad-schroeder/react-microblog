import React, { Component } from 'react';
import PostForm from '../PostForm/PostForm';
import CommentList from '../CommentList/CommentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  handleEdit() {
    this.setState({ isEditing: true });
  }

  handleDelete() {
    this.props.deletePost(this.props.postInfo.id);
    this.props.history.push('/');
  }

  deleteComment(id) {
    this.props.deleteComment(id);
  }

  render() {
    console.log('Post', this.props);

    const { title, description, body } = this.props.postInfo;

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
        <div className="Post">
          <div className="media">
            <div className="media-body">
              <h1 className="mb-1">{title}</h1>
              <p>
                <em>{description}</em>
              </p>
            </div>
            <div className="ml-3 align-self-center">
              <button className="btn btn-link" onClick={this.handleEdit}>
                <FontAwesomeIcon icon="edit" />
              </button>
              <button
                className="btn btn-link text-danger"
                onClick={this.handleDelete}
              >
                <FontAwesomeIcon icon="times" />
              </button>
            </div>
          </div>

          <p>{body}</p>

          <CommentList
            comments={this.props.comments}
            deleteComment={this.deleteComment}
          />
        </div>
      );
    }
  }
}

export default Post;
