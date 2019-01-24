import React, { Component } from 'react';
import Comment from '../Comment/Comment';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
  }

  deleteComment(id) {
    this.props.deleteComment(id);
  }

  render() {
    const comments = this.props.comments.map(comment => (
      <Comment
        key={comment.id}
        text={comment.text}
        deleteComment={() => this.deleteComment(comment.id)}
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
