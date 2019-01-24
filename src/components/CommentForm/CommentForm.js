import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.handleAddComment}>
          <div className="form-group">
            <label htmlFor="comment" className="sr-only">
              Comment
            </label>
            <input
              type="text"
              name="comment"
              id="comment"
              className="form-control"
              value={this.state.comment}
              onChange={this.handleChange}
              placeholder="New comment...."
            />
          </div>
          <button>Add</button>
        </form>
      </>
    );
  }
}

export default CommentForm;
