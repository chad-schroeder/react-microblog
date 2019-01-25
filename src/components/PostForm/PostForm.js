import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      body: this.props.body
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (this.props.isEditing) {
      const payload = { ...this.state, id: this.props.id };
      this.props.editPost(payload);
    } else {
      this.props.addPost(this.state);
    }

    this.props.history.push('/');
  }

  render() {
    console.log('PostForm', this.state);

    return (
      <>
        <div
          className="py-3 px-4"
          style={{
            borderTop: '4px solid #333',
            backgroundColor: '#e9ecef'
          }}
        >
          <h2
            className="mb-0 h5"
            style={{
              color: '#333',
              fontWeight: 600
            }}
          >
            {this.props.heading}
          </h2>
        </div>
        <form onSubmit={this.handleSubmit} className="p-4 bg-white">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              name="body"
              className="form-control"
              rows="3"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <Link to="/" className="btn btn-secondary ml-2">
              Cancel
            </Link>
          </div>
        </form>
      </>
    );
  }
}

PostForm.defaultProps = {
  title: '',
  description: '',
  body: ''
};

export default PostForm;
