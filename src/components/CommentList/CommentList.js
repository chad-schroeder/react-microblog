import React, { Component } from 'react';
import Comment from '../Comment/Comment';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  addComment(evt) {
    evt.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({
      comment: ''
    });
  }

  deleteComment(id) {
    this.props.deleteComment(id);
  }

  render() {
    const comments = this.props.comments.map(comment => (
      <Comment
        key={comment.id}
        id={comment.id}
        text={comment.text}
        addComment={this.addComment}
        deleteComment={this.deleteComment}
      />
    ));

    return (
      <>
        <h2
          className="mt-4 mb-0 py-3 px-3 h4"
          style={{
            color: '#333',
            fontWeight: 600,
            borderTop: '4px solid #333',
            backgroundColor: '#e9ecef'
          }}
        >
          Comments
        </h2>
        {comments.length ? (
          <ul className="list-group list-group-flush mb-4">{comments}</ul>
        ) : (
          ''
        )}
        <form onSubmit={this.addComment}>
          <label htmlFor="comment" className="sr-only">
            Comment
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              name="comment"
              className="form-control form-control-lg"
              value={this.state.comment}
              onChange={this.handleChange}
              placeholder="Add comment..."
              aria-label="Add comment"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-secondary" id="button-addon2">
                Button
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default CommentList;
