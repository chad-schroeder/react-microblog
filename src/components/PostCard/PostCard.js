import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostCard extends Component {
  render() {
    console.log('postCard this.props ', this.props);
    // const id = Object.keys(this.props.posts);
    // console.log('In PostCard, id is ', id);
    const { title, description } = this.props.value;
    console.log('In PostCard title description', title, description);
    const id = this.props.id;
    console.log('In PostCard, id is ', id);

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
