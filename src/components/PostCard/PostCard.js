import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostCard extends Component {
  render() {
    const { id, title, description } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            <Link to={`/${id}`}>{title}</Link>
          </h4>
          <p className="m-0">{description}</p>
        </div>
      </div>
    );
  }
}

export default PostCard;
