import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostCard extends Component {
  render() {
    // console.log('postCard', this.props);
    const { id, title, description } = this.props.value;

    return (
      <Link to={`/${id}`} className="text-decoration-none">
        <h4 className="mb-0 h5" style={{ fontWeight: 600 }}>
          {title}
        </h4>
        <p className="m-0 text-muted">{description}</p>
      </Link>
    );
  }
}

export default PostCard;
