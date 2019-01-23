import React, { Component } from 'react';
import PostForm from '../PostForm/PostForm';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {}

  handleEdit = evt => {
    // this.setState({
    //   [evt.target.name]: evt.target.value
    this.setState({ isEditing: true });
    // });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    console.log(this.state.isEditing);
    const { title, description, body } = this.props.postInfo;
    console.log('post', this.props);
    if (this.state.isEditing) {
      return <PostForm />;
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
              <button onClick={this.handleEdit}>Edit</button>
              <button>Delete</button>
            </div>
          </div>

          <p>{body}</p>
        </div>
      );
    }
  }
}

export default Post;
