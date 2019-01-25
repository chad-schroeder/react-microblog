import React, { Component } from 'react';
import CommentList from '../../components/CommentList/CommentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewPostContainer from '../../containers/NewPost/NewPostContainer';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };

    this.handleEdit = this.handleEdit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  handleEdit() {
    this.setState({ isEditing: true });
  }

  deletePost() {
    this.props.delete_post(this.props.match.params.id);
    this.props.history.push('/');
  }

  addComment(comment) {
    const payload = { post_id: +this.props.match.params.id, text: comment };

    this.props.add_comment(payload);
  }

  deleteComment(comment_id) {
    const payload = { post_id: +this.props.match.params.id, comment_id };
    this.props.delete_comment(payload);
  }

  render() {
    const post = Object.entries(this.props.posts).map(post =>
      Object.values(post)[0] === this.props.match.params.id
        ? Object.values(post)[1]
        : null
    );

    // const post = this.props.posts[this.props.match.params.id];

    // const url = this.props.match.params.id;
    console.log('in post, this.props is', this.props);
    console.log('in post, post is', post);
    // console.log('match is', this.props[this.props.match.params.id]);

    // console.log('url is', url);

    const { title, body, comments } = {
      title: 'title',
      body: 'body',
      comments: 'comments'
    };

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
            className="mb-3 py-2 px-4"
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

// {Object.entries(this.props.posts).map(post => (
//     <PostCard
//       value={Object.values(post)[1]}
//       id={Object.values(post)[0]}
//     />
//   ))}

// console.log(
//     'Object[1]',
//     Object.values(post)[1],
//     'Object[0]',
//     Object.values(post)[0];
