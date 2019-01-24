import React, { Component } from 'react';
import PostCard from '../PostCard/PostCard';

class Home extends Component {
  static defaultProps = {
    posts: []
  };

  render() {
    const posts = this.props.posts.map(post => (
      <div key={post.id} className="col-12 col-md-6 col-lg-4">
        <PostCard {...post} />
      </div>
    ));

    return (
      <>
        <h2 className="lead">
          Welcome to <strong>Microblog</strong>, our innovative site for
          communicating on the information superhighway.
        </h2>
        <div className="row my-4">{posts}</div>
      </>
    );
  }
}

export default Home;
