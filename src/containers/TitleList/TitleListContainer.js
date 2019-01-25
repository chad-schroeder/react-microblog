import React, { Component } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import { connect } from 'react-redux';

class TitleListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('TitleListContainer ', this.props);
    const posts = this.props;

    return (
      <div className="TitleList">
        <ul className="list-group list-group-flush">POST CARDS</ul>

        {Object.values(posts.posts).map(post => (
          <PostCard value={post} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
export default connect(mapStateToProps)(TitleListContainer);

// {Object.entries(posts.posts).forEach(([key, val]) => {
//   <PostCard values={val} />;
// })}
