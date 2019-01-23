import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: ''
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
    this.props.addPost(this.state);
    this.setState({
      title: '',
      description: '',
      body: ''
    });
    this.props.history.push('/');
  }

  render() {
    return (
      <>
        <h1 className="h2 mb-4">{this.props.title}</h1>
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <Link to="/" className="btn btn-secondary ml-2">
            Cancel
          </Link>
        </form>
      </>
    );
  }
}

export default PostForm;
