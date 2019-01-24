import React, { Component } from 'react';
import Comment from '../Comment/Comment';
const uuid = require('uuid/v4');

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
  }

  handleCommentDelete() {
    this.props.deleteComment(this.props.text);
  }

  render() {
    console.log(this.props.comments);

    const comments = this.props.comments.map(comment => (
      <Comment
        key={uuid()}
        text={comment}
        deleteComment={this.props.deleteComment}
      />
    ));

    return (
      <>
        <h2 className="border-top mt-4 pt-3">Comments</h2>
        {comments}
      </>
    );
  }
}

export default CommentList;
