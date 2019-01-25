import React, { Component } from 'react';
import Comment from '../Comment/Comment';
const uuid = require('uuid/v4');

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addComent(this.state.comment);
    this.setState({ comment: '' });
  }

  // addComment(evt) {
  //   evt.preventDefault();
  //   this.props.addComment(this.state.comment);
  //   this.setState({
  //     comment: ''
  //   });
  // }

  // deleteComment(id) {
  //   this.props.deleteComment(id);
  // }

  render() {
    // const comments = this.props.comments.map(comment => (
    //   <Comment
    //     key={comment.id}
    //     id={comment.id}
    //     text={comment.text}
    //     addComment={this.addComment}
    //     deleteComment={this.deleteComment}
    //   />
    // ));

    const comments = Object.values(this.props.posts.comments).map(comment => (
      <Comment
        key={uuid()}
        {...comment}
        deleteComment={this.props.delete_comment}
      />
    ));

    return (
      <>
        <div
          className="mb-0 py-3 px-4"
          style={{
            borderTop: '4px solid #333',
            backgroundColor: '#e9ecef'
          }}
        >
          <h2
            className="mb-2 h5"
            style={{
              color: '#333',
              fontWeight: 600
            }}
          >
            Comments
          </h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="comment" className="sr-only">
              Comment
            </label>
            <div className="input-group">
              <input
                type="text"
                name="comment"
                className="form-control"
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
        </div>
        {comments.length ? (
          <ul className="list-group list-group-flush mb-5">{comments}</ul>
        ) : (
          ''
        )}
      </>
    );
    // return (
    //   <>
    //     <div
    //       className="mt-4 mb-0 py-3 px-4"
    //       style={{
    //         borderTop: '3px solid #333',
    //         backgroundColor: '#e9ecef'
    //       }}
    //     >
    //       <h2
    //         className="mb-3 h5"
    //         style={{
    //           color: '#333',
    //           fontWeight: 600
    //         }}
    //       >
    //         Comments
    //       </h2>
    //       <form onSubmit={this.addComment}>
    //         <label htmlFor="comment" className="sr-only">
    //           Comment
    //         </label>
    //         <div className="input-group">
    //           <input
    //             type="text"
    //             name="comment"
    //             className="form-control"
    //             value={this.state.comment}
    //             onChange={this.handleChange}
    //             placeholder="Add comment..."
    //             aria-label="Add comment"
    //             aria-describedby="button-addon2"
    //           />
    //           <div className="input-group-append">
    //             <button className="btn btn-secondary" id="button-addon2">
    //               Button
    //             </button>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //     {comments.length ? (
    //       <ul className="list-group list-group-flush mb-5">{comments}</ul>
    //     ) : (
    //       ''
    //     )}
    //   </>
    // );
  }
}

export default CommentList;
